<template>
  <div class="menu">
    <div class="menu_title">Micro App Demo</div>
    <el-menu router>
      <el-menu-item-group v-for="group in routers" :key="group.id" :title="isCn ? group.name : group.enName">
        <el-menu-item v-for="item in group.list" :key="item.path" :index="item.path">{{ isCn ? item.name : item.enName }}</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import useUserStore from '@/store/user';


const { locale } = useI18n();
const userStore = useUserStore();

const isCn = computed(() => locale.value === 'zh');
const routers = computed(() => userStore.routers);
</script>

<style lang="scss" scoped>
.menu {
  background-color: azure;
  height: 100%;
  &_title {
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  a {
    display: block;
    padding: 10px;

    & + & {
      margin-top: 20px;
    }
  }
}
</style>
