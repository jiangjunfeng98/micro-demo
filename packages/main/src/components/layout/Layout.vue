<template>
  <el-container class="app-container">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <Menu />
      </el-aside>
      <el-container>
        <tag-bar />
        <el-main>
          <router-view v-slot="{ Component }">
            <transition name="el-zoom-in-center">
              <keep-alive :include="cachedViews">
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import useUserStore from '@/store/user';
import Menu from './menu/Menu.vue';
import TagBar from './tag-bar/TagBar.vue';
import useCacheStore from '@/store/cache';

const userStore = useUserStore();
const cacheStore = useCacheStore();

// tab bag 缓存
const cachedViews = computed((): string[] => cacheStore.cachedViews.map((v) => (v.name || '') as unknown as string));

onMounted(async () => {
  await userStore.getUserProfile();
});
</script>

<style lang="scss" scoped>
.app {
  &-container {
    min-height: 100vh;
  }
}

:deep(.el-header) {
  background-color: aliceblue;
}

:deep(.el-footer) {
  background-color: rgb(203, 228, 228);
}
</style>
