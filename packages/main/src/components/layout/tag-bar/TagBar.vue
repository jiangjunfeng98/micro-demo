<template>
  <div class="scroll-container" @scroll="closeMenu">
    <router-link to="/" class="left-home" :class="['tags-item', { 'tags-active': route.path === '/' }]">
      <home-filled style="width: 16px; height: 16px;" />
    </router-link>
    <router-link
      v-for="tag in cachedViews"
      :key="tag.path"
      :class="['tags-item', { 'tags-active': isAction(tag) }]"
      :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
      @contextmenu.prevent="openMenu(tag, $event)"
    >
      <span class="tags-item-text">
        <span>{{ routeAndNames[tag.path] }}</span>
        <span v-if="tag?.query?.sign" class="tags-item-text-sign">{{ tag?.query?.sign }}</span>
      </span>
      <el-icon class="tags-item-close" @click.prevent.stop="closeSelectedTag(tag)">
        <Close />
      </el-icon>
    </router-link>
  </div>
  <ul v-show="visibleMenu" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
    <li @click="closeSelectedTag()">关闭</li>
    <li @click="closeOthersTags">关闭其他</li>
    <li @click="closeAllTags">关闭所有</li>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Close, HomeFilled } from '@element-plus/icons-vue';
import useTagBar from './useTagBar';

const route = useRoute();

const { visibleMenu, left, top, routeAndNames, cachedViews, isAction, closeSelectedTag, openMenu, closeAllTags, closeOthersTags, closeMenu } = useTagBar();
</script>

<style lang="scss" scoped>
.scroll-container {
  margin-top: 6px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  padding: 8px 0;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
}

// 火狐样式需要特殊处理
@-moz-document url-prefix("") {
  .scroll-container {
    margin-top: 12px;
    scrollbar-color: #b4bccc transparent;
    scrollbar-width: thin;
  }
}

.tags {
  &-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 0 12px 0 16px;
    height: 34px;
    background-color: #e2e7f5;
    color: #8c8c8c;
    font-size: 14px;
    border-radius: 6px;
    text-decoration-line: unset;

    & + & {
      margin-left: 12px;
    }

    &-text {
      display: flex;
      flex-direction: column;

      &-sign {
        font-size: 12px;
        line-height: 14px;
      }
    }

    &-close {
      margin-left: 8px;
      font-size: 15px;

      &:hover {
        transform: scale(1.3);
      }
    }

    &:hover {
      color: #ffffff;
      background-color: rgb(69, 90, 247, 60%);
    }
  }

  &-active {
    background-color: #455af7;
    font-weight: bold;
    color: #ffffff;
  }
}

.contextmenu {
  margin: 0;
  background: #ffffff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333333;
  box-shadow: 2px 2px 3px 0 rgb(0, 0, 0, 30%);

  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;

    &:hover {
      background: #eeeeee;
    }
  }
}
</style>

