<script setup lang="ts">
import { authApi } from '@/apis/auth.api'
import { useToast } from '@/components/ui/toast'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {useAccountStore} from "../stores/account";

const { toast } = useToast()
const handleLogout = () => {
  authApi.logout().then((response) => {
    toast({
      title: 'Thành công',
      description: response.data.message,
    })
  })
}
const account = useAccountStore()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="secondary" size="icon" class="rounded-full">
        <Avatar class="hidden h-9 w-9 sm:flex">
          <AvatarImage :src="account.avatar" :alt="account.name" />
          <AvatarFallback>{{ account.name }}</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Hồ sơ</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="handleLogout">Đăng xuất</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
