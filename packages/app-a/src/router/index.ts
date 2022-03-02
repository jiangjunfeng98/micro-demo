import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/a', name: 'A', component: () => import('../views/a/A.vue') },
  { path: '/b', name: 'B', component: () => import('../views/B.vue') },
  { path: '/c', name: 'C', component: () => import('../views/C.vue') },
  { path: '/info', name: 'Info', component: () => import('../views/info/Info.vue') }
];

export default routes;
