<template>
  <el-config-provider :locale="localeLang">
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="canKeepAlive">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';
import { actions, ICachedView } from '@app/base-core';
import useUserStore from '@/store/user';
import routes from '@/router';

const userStore = useUserStore();
const { locale } = useI18n();

const localeLang = computed(() => (locale.value === 'zh-cn' ? zhCn : en));

const cacheViews = ref<ICachedView[]>([]);

actions.onGlobalStateChange((state: Record<string, any>) => {
  userStore.setUserProfile(state.user);
  cacheViews.value = state.cachedViews;
}, true);

/**
 * 缓存组件名数组
 */
const canKeepAlive = computed((): string[] => {
  // 获取 app1 开头的缓存信息
  const appCacheViews = cacheViews.value.filter((item) => item.path.startsWith('/app2/'));
  // 将 app1 的缓存信息进行映射，获取到实际 router
  const cacheViewNames = appCacheViews.map((item) => routes.find((route) => `/app2${route.path}` === item.path)) || [];
  // 获取缓存组件 name
  return cacheViewNames.map((item) => (item?.name ?? '') as string);
});
</script>

