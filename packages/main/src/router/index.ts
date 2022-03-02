import { getToken, ICachedView } from '@app/base-core';
import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import useCacheStore from '@/store/cache';
import useUserStore from '@/store/user';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      // 无需 keep alive 标识
      noKeepAlive: true
    }
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/components/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Main',
        component: () => import('@/views/main/Main.vue'),
        meta: {
          noKeepAlive: true
        }
      },
      // micro
      { path: ':micro(app1|app2):endPath(.*)', name: 'MicroApp', component: () => import('@/views/MicroApp.vue') },
      { path: 'user', name: 'User', component: () => import('@/views/user/User.vue') }
    ]
  }
];

const router = createRouter({
  /**
   * Creates an HTML5 history. Most common history for single page applications.
   *
   * @param base -
   */
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});


/**
 * 路由缓存信息封装
 * @param route
 */
const cachedViewEncapsulation = (route: RouteLocationNormalized): ICachedView => ({
  path: route.path,
  fullPath: route.fullPath,
  query: route.query,
  name: route.name || ''
});


/**
 * 导航卫士
 */
router.beforeEach(async (to, from, next) => {
  const token = getToken();
  if (!token) {
    if (to.path.match('login')) {
      next();
    } else {
      next({ name: 'Login', replace: true });
    }
  } else {
    const userStore = useUserStore();
    if (userStore.routers.length === 0) {
      await userStore.getRouters();
      // TODO: 可做权限判断；或者将 routers 放到 Menu 组件初始化
    }
    if (!to.meta.noKeepAlive) {
      const cacheStore = useCacheStore();
      cacheStore.addCachedViews(cachedViewEncapsulation(to));
    }
    next();
  }
});

export default router;
