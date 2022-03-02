import type { IRouterVO } from '@/apis/user/types';

export type UserStoreState = {
  name: string,
  profile: any,
  routers: IRouterVO[]
}
