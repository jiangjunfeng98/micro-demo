import { ICachedView, IProfileType } from './types';

/**
 * emptyAction
 */
const emptyAction = () => {
  // eslint-disable-next-line no-console
  console.warn('当前使用的是空 Action!');
};

// eslint-disable-next-line no-unused-vars
type OnGlobalStateChangeCallback = (state: Record<string, any>, prevState: Record<string, any>) => void;

/**
 * Index
 */
class Index {
  // 默认值为空 Action
  private actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  };

  // 缓存状态
  private state = {};

  /**
   * 设置 actions
   */
  setActions(actionsTemp: any) {
    this.actions = actionsTemp;
  }

  /**
   * 状态变更 映射
   */
  onGlobalStateChange(callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) {
    // @ts-ignore
    return this.actions.onGlobalStateChange(callback, fireImmediately);
  }

  /**
   * 设置状态 映射
   */
  private setGlobalState(state: Record<string, any>) {
    this.state = state;
    // @ts-ignore
    return this.actions.setGlobalState(state);
  }

  /**
   * 设置路由
   * @param routes
   */
  setRouters(routes: any[]) {
    return this.setGlobalState({
      ...this.state,
      routes
    });
  }

  /**
   * 设置用户信息
   * @param user
   */
  setUserState(user: IProfileType) {
    return this.setGlobalState({
      ...this.state,
      user
    });
  }

  /**
   * 设置用户资源
   * @param roleResource 用户资源
   * @returns
   */
  setRoleResourceState(roleResource: any[]) {
    return this.setGlobalState({
      ...this.state,
      roleResource
    });
  }

  /**
   * 设置tabbar 缓存信息
   * @param cachedViews 已打开页面信息
   * @returns
   */
  setCachedViews(cachedViews: ICachedView[]) {
    return this.setGlobalState({
      ...this.state,
      cachedViews
    });
  }

  /**
   * 设置需要跳转的 URL
   * @param link 跳转地址
   * @returns
   */
  setLink(link: string) {
    return this.setGlobalState({
      ...this.state,
      link
    });
  }
}

// actions
const actions = new Index();

export {
  actions
};
