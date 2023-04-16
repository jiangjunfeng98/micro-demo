<template>
  <div>
    <div id="a-app" />
    <div id="b-app" />
  </div>
</template>

<script setup lang='ts'>
import { reactive, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { addGlobalUncaughtErrorHandler, loadMicroApp } from 'qiankun';
import { ElLoading } from 'element-plus';
import type { ICachedView } from '@app/base-core';
import apps from '@/micro/apps';
import useCacheStore from '@/store/cache';

const appRoute = useRoute();
const cacheStore = useCacheStore();

const microList = reactive<any>({});

/**
 * 监听路由变化，新增/修改/删除 缓存
 * @param path
 */
const activationHandleChange = async (path: string) => {
  const activeRules: string[] = apps.map((app) => app.activeRule as unknown as string);
  const isMicro = activeRules.some((rule) => path.startsWith(rule));
  if (!isMicro) return;
  const conf = apps.find((app) => path.startsWith(app.activeRule.toString()));
  if (!conf) return;
  // 如果已经加载过一次，则无需再次加载
  const current = microList[conf.activeRule.toString()];
  if (current) return;

  // 缓存当前子应用
  const loadingInstance = ElLoading.service({ fullscreen: true });
  const micro = loadMicroApp({ ...conf });
  microList[conf.activeRule.toString()] = micro;
  try {
    await micro.mountPromise;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  } finally {
    loadingInstance.close();
  }
};

const hasCachedViews = (key: string, arr: string[]) => arr.some((url: string) => url.startsWith(key));

/**
 * 关闭 tab 标签，
 * @param newVal
 * @param oldVal
 */
const unmountMicApp = (newVal: number, oldVal: number) => {
  if (newVal > oldVal) return;
  const cachedViewsAppUrls = cacheStore.cachedViews.map((item: ICachedView) => item.path);
  const keys = Object.keys(microList);
  keys.forEach((key: string) => {
    if (!hasCachedViews(key, cachedViewsAppUrls)) {
      microList[key].unmount();
      delete microList[key];
    }
  });
};

addGlobalUncaughtErrorHandler((event) => {
  console.error(event);
});

watch(() => appRoute.path, activationHandleChange);

watch(() => cacheStore.cachedViews.length, unmountMicApp);

onMounted(() => {
  if (window.qiankunStarted) return;
  window.qiankunStarted = true;
  activationHandleChange(appRoute.path);
});

onUnmounted(() => {
  window.qiankunStarted = false;
  Object.values(microList).forEach((mic: any) => {
    mic.unmount();
  });
});
</script>

<script lang="ts">
export default {
  name: 'MicroApp'
};
</script>
