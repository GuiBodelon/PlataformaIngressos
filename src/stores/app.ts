import { defineStore } from 'pinia';

export const useAppStore = defineStore('App', {
  state: () => {
    return {
      dark: false,
    };
  },
  getters: {
    isDarkActive: (state) => {
      return state.dark;
    },
  },
  actions: {
    setDarkMode(val: boolean) {
      this.dark = val;
    },
  },
  //False so we can run SSR mode
  persist: false,
});
