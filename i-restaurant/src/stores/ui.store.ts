import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    isHeaderSticky: false,
  }),

  actions: {
    setHeaderSticky(value: boolean) {
      this.isHeaderSticky = value
    },
  },
})
