<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from '@/components/ui/toast/use-toast'
import { authApi } from '@/apis/auth.api'
import LoadingFullPage from '@/components/LoadingFullPage.vue'
import type { typeAuthCallback } from '@/types/auth'

const { toast } = useToast()
const router = useRouter()

onMounted(() => {
  const route = useRoute()
  const { authuser, code, prompt, scope } = route.query as typeAuthCallback

  if (authuser && code && prompt && scope) {
    authApi
      .callback({ authuser, code, prompt, scope })
      .then((response) => {
        if (response.data.data && response.data.data.token && response.data.data.user) {
          const { user, token } = response.data.data
          localStorage.setItem('user', JSON.stringify(user))
          localStorage.setItem('access_token', token?.access_token)
          localStorage.setItem('refresh_token', token?.refresh_token)
          toast({
            title: response.data.message,
            description: `Chào mừng, ${user?.name}!`,
          })
          router.push('/')
        }
      })
      .catch((error) => {
        toast({
          title: 'Đăng nhập thất bại',
          description: error.message,
        })
        router.push('/login')
      })
  } else {
    toast({
      title: 'Thiếu thông tin',
      description: 'Không tìm thấy mã xác thực, vui lòng đăng nhập lại.',
    })
    router.push('/login')
  }
})
</script>

<template>
  <LoadingFullPage />
</template>
