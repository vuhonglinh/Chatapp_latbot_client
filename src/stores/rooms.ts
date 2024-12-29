import { defineStore } from 'pinia'
import type { TypeUser } from '@/types/auth'
import { userApi } from '@/apis/user.api'

export const useRoomStore = defineStore('rooms', {
  state: () => ({
    users: [] as TypeUser[],
  }),
  getters: {
    userCount: (state) => state.users.length,
  },
  actions: {
    addUser(user: TypeUser) {
      this.users.push(user)
    },
    async getUsers() {
      try {
        const response = await userApi.getUsers()
        if (response.data.data) {
          this.users = response.data.data
        }
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },
    removeUser(user: TypeUser) {
      const index = this.users.indexOf(user)
      if (index > -1) {
        this.users.splice(index, 1)
      }
    },
  },
})
