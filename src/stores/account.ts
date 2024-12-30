import { defineStore } from 'pinia'
import type { TypeUser } from "@/types/auth";

export const useAccountStore = defineStore('account', {
  state: () => ({
    account: null as TypeUser | null,
  }),
  actions: {
    setAccount(user: TypeUser) {
      this.account = user
    }
  }
})
