import { getLocale } from '@app/base-core';
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    app: {

    }
  },
  'zh-cn': {
    app: {

    }
  }
};

const i18n = createI18n({
  // 默认语言，存入localStorage
  locale: getLocale(),
  fallbackLocale: 'zh-cn',
  messages
});

export default i18n;
