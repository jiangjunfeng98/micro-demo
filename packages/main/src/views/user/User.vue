<template>
  <div>
    <p>User</p>
    <div>name: {{ name }}</div>
    <el-alert title="更新后会全局状态更新" type="info" />
    <p>
      <el-input v-model="input" placeholder="Please input" style="width: 200px;" />
      <el-button type="primary" @click="saveName">Primary</el-button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import useUserStore from '@/store/user';

const userStore = useUserStore();
const input = ref('');

const name = computed(() => userStore.name);

const getUserProfile = async () => {
  await userStore.getUserProfile();
};

const saveName = () => {
  userStore.changeName(input.value);
};

onMounted(getUserProfile);
</script>

<script lang="ts">
export default {
  name: 'User'
};
</script>

