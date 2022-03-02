import { GlobalStateType, IProfileType } from './types';

/**
 * init state
 */
export const initialState: GlobalStateType = {
  // 路由权限
  routes: [],
  // 用户信息
  user: { userName: '' } as IProfileType,
  // 用户资源
  roleResource: [],
  cachedViews: [],
  link: ''
};
