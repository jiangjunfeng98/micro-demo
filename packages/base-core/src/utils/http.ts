import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig } from 'axios';
import { getLocale, getToken } from './localStorage';

/**
 * http响应
 */
export interface BaseResp<T> {
  code: string;
  msg: string;
  data: T;
  time?: string | null;
}

/**
 * @description  添加一个请求拦截器
 */
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = {};
  }
  const token = getToken();
  if (token) {
    config.headers.Authorization = token;
  }
  config.headers.lang = getLocale();
  return config;
},
  (error: any) => Promise.reject(error)
);

/**
 * @description  添加一个响应拦截器
 */
axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response?.data?.data ?? (response?.data ?? response);
  },
  async (err: any) => {
    return Promise.reject(err);
  }
);

export { axios };

