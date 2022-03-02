import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/q', name: 'Q', component: () => import('../views/Q.vue') },
  { path: '/w', name: 'W', component: () => import('../views/W.vue') },
  { path: '/e', name: 'E', component: () => import('../views/E.vue') }
];

export default routes;
