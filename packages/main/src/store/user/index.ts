import { defineStore } from 'pinia';
import { getProfileApi, getRoutersApi } from '@/apis/user';
import actions from '@/shared';
import type { UserVO } from '@/apis/user/types';
import type { UserStoreState } from './type';

/**
 * user store
 */
const useUserStore = defineStore('user', {
  state: (): UserStoreState => ({
    name: '',
    profile: {},
    routers: []
  }),
  getters: {
    cName: (state) => state?.name ?? ''
  },
  actions: {
    async getUserProfile() {
      if (this.profile.name) {
        return this.profile;
      }
      const res = await getProfileApi();
      this.profile = res;
      this.name = res.name;
      actions.setUserState(this.profile);
      return res;
    },
    logout() {
      this.profile = {} as UserVO;
      this.name = '';
    },
    changeName(name: string) {
      this.name = name;
      this.profile.name = name;
      actions.setUserState(this.profile);
    },
    async getRouters() {
      if (this.routers.length) {
        return this.routers;
      }
      const res = await getRoutersApi();
      this.routers = res;
      actions.setRouters(res);
      return res;
    }
  }
});

export default useUserStore;
