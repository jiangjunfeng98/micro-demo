import { computed, ref, watchEffect, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { ICachedView } from '@app/base-core';
import useCacheStore from '@/store/cache';
import useUserStore from '@/store/user';


const useTagBar = () => {
  const route = useRoute();
  const router = useRouter();

  const userStore = useUserStore();
  const cacheStore = useCacheStore();

  const selectedTag = ref<ICachedView>({} as unknown as ICachedView);
  const visibleMenu = ref(false);
  const left = ref(0);
  const top = ref(0);

  /**
   * 路由和名称映射
   */
  const routeAndNames = computed(() => {
    const obj: { [key: string]: string } = {
      '/app1/info': '应用1-A详情'
    };
    const lists = userStore.routers.map((item) => item.list).flat();
    lists.forEach((item) => {
      obj[item.path] = item.name;
    });
    return obj;
  });

  // 缓存的页面
  const cachedViews = computed(() => cacheStore.cachedViews);

  /**
   * 是否选中
   * @param tag
   */
  const isAction = (tag: ICachedView): boolean => {
    if (tag?.query?.sign) {
      return route.fullPath === tag.fullPath;
    }
    return route.path === tag.path;
  };

  /**
   * tag 标签关闭
   */
  const closeSelectedTag = async (view?: ICachedView) => {
    const tag = view || selectedTag.value;
    let index;
    // 支持同标签打开多个
    if (tag?.query?.sign) {
      index = cacheStore.cachedViews.findIndex((v: ICachedView) => v.path === tag.path && v?.query?.sign === tag?.query?.sign);
    } else {
      index = cacheStore.cachedViews.findIndex((v: ICachedView) => v.path === tag.path);
    }
    await cacheStore.delCachedViews(tag);
    if (route.fullPath === tag.fullPath) {
      const { length } = cacheStore.cachedViews;
      if (length > 0) {
        const activeIndex = index < length ? index : index - 1;
        const activeView = cacheStore.cachedViews[activeIndex];
        router.push(activeView.fullPath);
      } else {
        router.push({ name: 'Main' });
      }
    }
  };

  /**
   * 关闭所有
   */
  const closeAllTags = async () => {
    await cacheStore.delAllCachedViews();
    router.push({ name: 'Main' });
  };

  /**
   * 关闭其他
   */
  const closeOthersTags = () => {
    cacheStore.delOtherCachedViews(selectedTag.value);
    router.push({ path: selectedTag.value.fullPath });
  };

  /**
   * 鼠标右键
   * @param tag
   * @param e
   */
  const openMenu = (tag: ICachedView, e: PointerEvent) => {
    left.value = e.clientX - 20;
    top.value = e.clientY + 20;
    visibleMenu.value = true;
    selectedTag.value = tag;
  };

  /**
   * 菜单关闭
   */
  const closeMenu = () => {
    if (visibleMenu.value) {
      visibleMenu.value = false;
    }
  };

  const io = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio < 1) {
      setTimeout(() => {
        // eslint-disable-next-line no-unused-expressions
        document.querySelector('.scroll-container .tags-active')?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      }, 100);
    }
    io.disconnect();
  });

  watchEffect(() => {
    if (visibleMenu.value) {
      document.body.addEventListener('click', closeMenu);
    } else {
      document.body.removeEventListener('click', closeMenu);
    }
  });

  watch(() => route.fullPath, async () => {
    await nextTick();
    if (cachedViews.value.length < 6) return;
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;
    const active = document.querySelector('.scroll-container .tags-active');
    if (!active) return;
    io.observe(active);
  });

  return {
    visibleMenu, left, top, routeAndNames, cachedViews, isAction, closeSelectedTag, openMenu, closeAllTags, closeOthersTags, closeMenu
  };
};

export default useTagBar;
