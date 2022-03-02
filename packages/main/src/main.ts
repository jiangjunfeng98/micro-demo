import { createApp } from 'vue';
import router from '@/router';
import i18n from '@/i18n';
import pinia from '@/store';
import App from './App.vue';

import '@app/base-core/dist/style/index.scss';
import './assets/app.scss';

createApp(App).use(router).use(i18n).use(pinia).mount('#root-app');
