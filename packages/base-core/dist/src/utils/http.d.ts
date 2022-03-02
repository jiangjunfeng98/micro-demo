import axios from 'axios';
/**
 * http响应
 */
export interface BaseResp<T> {
    code: string;
    msg: string;
    data: T;
    time?: string | null;
}
export { axios };
