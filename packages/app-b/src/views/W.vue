<template>
  <div>
    <p>W</p>
    <div>
      Keep-Alive 测试：
      <el-input v-model="input" placeholder="Please input" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('');
</script>

<script lang="ts">
export default {
  name: 'W'
};
</script>
