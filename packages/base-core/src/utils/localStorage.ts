const AUTH = 'authorization';

/**
 * 获取Token
 */
export const getToken = (): string => localStorage.getItem(AUTH) || '';

/**
* 设置Token
*/
export const setToken = (token: string): void => localStorage.setItem(AUTH, token);

/**
 * 获取语言
 */
export const getLocale = (): string => localStorage.getItem('lang') || localStorage.lang || 'zh-cn';

/**
 * 
 * @returns 清理 token
 */
export const clearUser = () => localStorage.removeItem(AUTH);