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
let bApp: any = null;
let bHistory: any = null;

function render(props: any = {}) {
  const { container } = props;
  const urlPrefix = '/app2';
  console.log(urlPrefix);

  // eslint-disable-next-line no-underscore-dangle
  bHistory = createWebHistory(window.__POWERED_BY_QIANKUN__ ? urlPrefix : '/');
  aRouter = createRouter({
    history: bHistory,
    routes
  });

  bApp = createApp(App);
  bApp.use(aRouter);
  bApp.use(pinia);
  bApp.use(i18n);
  bApp.mount(container ? container.querySelector('#app2-app') : '#app2-app');
}

// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(): Promise<void> {
  console.log('B-app bootstraped');
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
  console.log('unmount');

  bApp.unmount();
  // eslint-disable-next-line no-underscore-dangle
  bApp._container.innerHTML = '';
  bApp = null;
  aRouter = null;
  bHistory.destroy();
}
