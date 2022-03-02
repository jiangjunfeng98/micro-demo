import './public-path';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { actions } from '@app/base-core';
import App from './App.vue';
import routes from './router';
import i18n from './i18n';
import pinia from './store';

// createApp(App).use(pinia).use(router).mount('#app');

let aRouter = null;
let aApp: any = null;
let aHistory: any = null;

function render(props: any = {}) {
  const { container } = props;
  const urlPrefix = '/app1';

  // eslint-disable-next-line no-underscore-dangle
  aHistory = createWebHistory(window.__POWERED_BY_QIANKUN__ ? urlPrefix : '/');
  aRouter = createRouter({
    history: aHistory,
    routes
  });

  aApp = createApp(App);
  aApp.use(aRouter);
  aApp.use(pinia);
  aApp.use(i18n);
  aApp.mount(container ? container.querySelector('#app1-app') : '#app1-app');
}

// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(): Promise<void> {
  console.log('A-app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
  if (props) {
    // 注入 actions 实例
    actions.setActions(props);
  }
  render(props);
}

export async function unmount() {
  aApp.unmount();
  // eslint-disable-next-line no-underscore-dangle
  aApp._container.innerHTML = '';
  aApp = null;
  aRouter = null;
  aHistory.destroy();
}
