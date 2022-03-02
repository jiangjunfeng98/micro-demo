import { initGlobalState, MicroAppStateActions } from 'qiankun';
import { actions } from '@app/base-core';
import type { IUser, IGlobalState } from '@app/base-core';
/**
 * init state
 */
const initialState: IGlobalState = {
  // 用户信息
  user: { name: '' } as IUser
};

// actions
const qinKunActions: MicroAppStateActions = initGlobalState(initialState);
actions.setActions(qinKunActions);

export default actions;
