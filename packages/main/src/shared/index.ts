import { initGlobalState, MicroAppStateActions } from 'qiankun';
import { actions, initialState } from '@app/base-core';

// actions
const qinKunActions: MicroAppStateActions = initGlobalState(initialState);
actions.setActions(qinKunActions);

export default actions;
