<script setup lang="ts">
import Sidebar from '@/views/Chat/Sidebar.vue'
import Header from '@/components/Header.vue'
import { Button } from '@/components/ui/button'
import { Bell, Package2 } from 'lucide-vue-next'
</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="">Latbot</span>
          </a>
          <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
            <Bell class="h-4 w-4" />
            <span class="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <Sidebar />
      </div>
    </div>
    <div class="flex flex-col">
      <Header />
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">

          <router-view />

      </main>
    </div>
  </div>
</template>
