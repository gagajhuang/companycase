import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
		authenticated: false,
    token: null as string | null, 
  }),
  actions: {
    setToken(loginToken: string) {
      this.token = loginToken;

      const cookieToken = useCookie('token', { secure: true });
      cookieToken.value = loginToken;
      this.token = loginToken;
      this.authenticated = true;
    },
    revokeToken() {
      const cookieToken = useCookie('token', { secure: true });
      cookieToken.value = null;

      this.token = null;
      this.authenticated = false;
    }
  },
});