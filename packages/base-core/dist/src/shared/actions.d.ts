import { ICachedView, IProfileType } from './types';
declare type OnGlobalStateChangeCallback = (state: Record<string, any>, prevState: Record<string, any>) => void;
/**
 * Index
 */
declare class Index {
    private actions;
    private state;
    /**
     * 设置 actions
     */
    setActions(actionsTemp: any): void;
    /**
     * 状态变更 映射
     */
    onGlobalStateChange(callback: OnGlobalStateChangeCallback, fireImmediately?: boolean): void;
    /**
     * 设置状态 映射
     */
    private setGlobalState;
    /**
     * 设置路由
     * @param routes
     */
    setRouters(routes: any[]): void;
    /**
     * 设置用户信息
     * @param user
     */
    setUserState(user: IProfileType): void;
    /**
     * 设置用户资源
     * @param roleResource 用户资源
     * @returns
     */
    setRoleResourceState(roleResource: any[]): void;
    /**
     * 设置tabbar 缓存信息
     * @param cachedViews 已打开页面信息
     * @returns
     */
    setCachedViews(cachedViews: ICachedView[]): void;
    /**
     * 设置需要跳转的 URL
     * @param link 跳转地址
     * @returns
     */
    setLink(link: string): void;
}
declare const actions: Index;
export { actions };
