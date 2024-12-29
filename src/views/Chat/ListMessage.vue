<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Message from '@/components/Message.vue'
import Image from '../../../public/favicon.ico'
import type { TypeMessage } from '@/types/room'
import { onMounted, ref, useTemplateRef } from 'vue'

const { messages } = defineProps<{ messages: TypeMessage[] }>()
const itemRefs = useTemplateRef('items')

onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <div class="flex-1">
    <ScrollArea class="md:h-[700px] rounded-md border" ref="items">
      <Message
        v-for="message in messages"
        :key="message.id"
        :avatar="message.sender.avatar"
        :is-me="true"
        :name="message.message"
        :date="message.date"
        :message="message.message"
      />
    </ScrollArea>
  </div>
</template>
