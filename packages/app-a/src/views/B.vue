<template>
  <div>
    <p>B</p>
    <el-alert title="全局状态展示" type="info" />
    <p>{{ userStore.profile }}</p>
    <div>
      Keep-Alive 测试：
      <el-input v-model="input" placeholder="Please input" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useUserStore from '@/store/user';

const input = ref('');

const userStore = useUserStore();
</script>

<script lang="ts">
export default {
  name: 'B'
};
</script>

