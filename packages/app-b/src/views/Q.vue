<template>
  <div class="home">
    <div>Q</div>
    <p>{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useUserStore from '@/store/user';

const userStore = useUserStore();

const name = computed(() => userStore.profile?.name ?? '');
</script>

<script lang="ts">
export default {
  name: 'Q'
};
</script>
