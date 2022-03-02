import { axios } from '@app/base-core';
import type { IRouterVO, TokenVO, UserVO } from './types';

const BASE_URL = '/api/v1/';
/**
 * login
 * @param username
 * @param password
 * @returns
 */
export const loginApi = (username: string, password: string): Promise<TokenVO> => axios.post(`${BASE_URL}/auth/login`, { username, password });

/**
 * 获取用户信息
 */
export const getProfileApi = (): Promise<UserVO> => axios.get(`${BASE_URL}/user`);

/**
 * 获取路由信息
 * @returns
 */
export const getRoutersApi = (): Promise<IRouterVO[]> => axios.get(`${BASE_URL}/routers`);

