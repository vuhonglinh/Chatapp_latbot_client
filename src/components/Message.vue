<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from '../../public/favicon.ico'

const { avatar, date, message, name, isMe } = defineProps({
  avatar: String,
  name: String,
  date: String,
  message: String,
  isMe: Boolean,
})
</script>

<template>
  <div
    :class="{
      'flex-1': true,
      'float-end': isMe,
    }"
  >
    <div class="flex py-2">
      <Avatar v-if="!isMe" class="hidden h-9 w-9 sm:flex">
        <AvatarImage :src="Image" alt="Avatar" />
        <AvatarFallback>{{ name }}</AvatarFallback>
      </Avatar>
      <Badge variant="outline" class="">
        <div class="flex flex-col pl-2 pt-1">
          <span class="w-full">
            {{ message }}
          </span>
          <p
            :class="{
              'text-xs text-muted-foreground': true,
              'text-right': !isMe,
              'text-left': isMe,
            }"
          >
            {{ date }}
          </p>
        </div>
      </Badge>
    </div>
  </div>
</template>
