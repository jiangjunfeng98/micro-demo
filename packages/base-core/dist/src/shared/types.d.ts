import type { LocationQuery, RouteMeta } from 'vue-router';
/**
 * 用户信息
 */
export interface IProfileType {
    name: string;
    userName: string;
    userId: string;
}
/**
 * 标签缓存类型
 */
export interface ICachedView {
    fullPath: string;
    query: LocationQuery;
    meta?: RouteMeta;
    name: string | symbol | undefined | null;
    path: string;
}
/**
 * 状态类型
 */
export declare type GlobalStateType = {
    routes: any[];
    user: IProfileType;
    roleResource: any[];
    cachedViews: ICachedView[];
    link: string;
};
