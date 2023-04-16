<template>
  <div>
    <p>C</p>
    <div>
      Keep-Alive 测试：
      <el-input v-model="input" placeholder="Please input" />
    </div>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <el-button @click="clickTest">111</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('');

const clickTest = () => {
  console.log('xxxx');
  const a = [1, 2];
  console.log(a[11].b);
};
</script>

<script lang="ts">
export default {
  name: 'C'
};
</script>

