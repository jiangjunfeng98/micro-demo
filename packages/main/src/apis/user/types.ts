export type TokenVO = {
  token: string;
};

/**
 * 用户信息
 */
export type UserVO = {
  id: number;
  name: string;
};

type IRouterList = {
  path: string;
  name: string;
  enName: string
}

export type IRouterVO = {
  id: string;
  name: string;
  enName: string;
  list: IRouterList[]
}
