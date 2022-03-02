<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import enLocale from 'element-plus/es/locale/lang/en';
import zhLocale from 'element-plus/es/locale/lang/zh-cn';

const t = useI18n();
console.log(t.locale.value);

const locale = computed(() => (t.locale.value === 'zh-cn' ? zhLocale : enLocale));
</script>
