import { defineStore } from 'pinia';
// import actions from '@/shared';
import type { UserStoreState } from './type';

/**
 * user store
 */
const useUserStore = defineStore('user', {
  state: (): UserStoreState => ({
    profile: {}
  }),
  actions: {
    async setUserProfile(user: any) {
      this.profile = user;
    }
  }
});

export default useUserStore;
