<template>
  <div>
    <p>Info：演示多个同标签共存，使用参数 sign 区分</p>
    <p>Name：{{ info }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const info = computed(() => route.query.sign);
</script>

<script lang="ts">
export default {
  name: 'Info'
};
</script>
<style scoped>

</style>
