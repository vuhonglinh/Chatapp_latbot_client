<script setup lang="ts">
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { RouterLink } from 'vue-router'
import { Calculator, Calendar, CreditCard, Smile, User } from 'lucide-vue-next'

import { useUserStore } from '@/stores/users.ts'
import { ref } from 'vue'
import type { TypeUser } from '@/types/auth'

const userStore = useUserStore()
const users = ref<TypeUser[]>([])

userStore.getUsers().then(() => {
  users.value = userStore.users
})
</script>

<template>
  <Command class="rounded-lg border shadow-md max-w-[450px] max-h-[100%]">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Nhóm">
        <CommandItem value="Calendar">
          <Calendar class="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </CommandItem>
        <CommandItem value="Search Emoji">
          <Smile class="mr-2 h-4 w-4" />
          <span>Search Emoji</span>
        </CommandItem>
        <CommandItem value="Calculator">
          <Calculator class="mr-2 h-4 w-4" />
          <span>Bạn bè</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Bạn bè">
        <CommandItem :value="user.slug" v-for="(user, index) in users" :key="index">
          <CreditCard class="mr-2 h-4 w-4" />
          <RouterLink
            :to="user.slug"
            :class="{ 'router-link-active': ($route.path ? $route.path : null) === user.slug }"
          >
            {{ user.name }}
          </RouterLink>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>

<style scoped>
.router-link-active {
  font-weight: bold;
  color: red;
}
</style>
