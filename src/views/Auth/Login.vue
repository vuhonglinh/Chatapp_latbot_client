<script setup lang="ts">
import { authApi } from '@/apis/auth.api'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast'
import { onMounted } from 'vue'

const { toast } = useToast()

const handleLogin = async () => {
  await authApi.login().then((response) => {
    const redirectUrl = response.data.data
    if (redirectUrl) {
      window.location.href = redirectUrl
    }
  })
}

onMounted(() => {
  toast({
    title: 'Vui lòng đăng nhập',
  })
})
</script>

<template>
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">Đăng nhập</h1>
          <p class="text-balance text-muted-foreground">
            Nhập email của bạn bên dưới để đăng nhập vào tài khoản của bạn
          </p>
        </div>
        <div class="grid gap-4">
          <Button variant="outline" @click="handleLogin" class="w-full">
            Đăng nhập bằng google
          </Button>
        </div>
      </div>
    </div>
    <div class="hidden bg-muted lg:block">
      <div class="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"></div>
    </div>
  </div>
</template>
