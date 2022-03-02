import { defineStore } from 'pinia';
import type { ICachedView } from '@app/base-core';
import actions from '@/shared';
import type { CacheStoreState } from './type';

/**
 * 是否存在缓存数据中
 * @param cachedViews
 * @param view
 */
const hasView = (cachedViews: ICachedView[], view: ICachedView) => cachedViews.some((v) => v.fullPath === view.fullPath);

/**
 * cache store
 */
const useCacheStore = defineStore('cache', {
  state: (): CacheStoreState => ({
    cachedViews: []
  }),
  actions: {
    /**
     * 添加缓存信息
     * @param openView 打开标签
     * @returns
     */
    addCachedViews(openView: ICachedView) {
      // fullPath 匹配
      if (hasView(this.cachedViews, openView)) {
        return;
      }
      // 同路径多标签处理，如: /a?sign=1、/a?sign=2
      if (openView?.query?.sign) {
        this.cachedViews.push({ ...openView });
      } else {
        // path 匹配，更新路由参数
        const index = this.cachedViews.findIndex((v) => v.path === openView.path);
        if (index > -1) {
          this.cachedViews[index] = openView;
        } else {
          this.cachedViews.push({ ...openView });
        }
      }
      actions.setCachedViews(this.cachedViews);
    },
    /**
     * 删除待关闭缓存信息
     * @param closeView 需要关闭的标签
     */
    delCachedViews(closeView: ICachedView) {
      const index = this.cachedViews.findIndex((v) => v.fullPath === closeView.fullPath);
      this.cachedViews.splice(index, 1);
      actions.setCachedViews(this.cachedViews);
    },
    /**
     * 删除所有缓存信息
     */
    delAllCachedViews() {
      this.cachedViews = [];
      actions.setCachedViews([]);
    },
    /**
     * 删除其他所有缓存
     * @param liveView 需要保留的标签
     * @returns
     */
    delOtherCachedViews(liveView: ICachedView) {
      if (this.cachedViews.length === 1) return;
      this.cachedViews = [liveView];
      actions.setCachedViews(this.cachedViews);
    }
  }
});

export default useCacheStore;
