<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { CornerDownLeft, Mic, Paperclip } from 'lucide-vue-next'
import ListMessage from '@/views/Chat/ListMessage.vue'
import { roomApi } from '@/apis/room.api'
import Input from '@/components/ui/input/Input.vue'
import type { TypeMessage } from '@/types/room'

const route = useRoute()
const slug = ref(route.params.slug)
watchEffect(async () => {
  slug.value = route.params.slug
  roomApi.getMessages(slug.value as string).then((response) => {
    console.log(response)
  })
})
const messages = reactive<TypeMessage[]>([])
const newMessage = ref('')

const handleSend = () => {
  if (newMessage.value.trim() != '') {
    roomApi.send({ message: newMessage.value, slug: slug.value }).then((response) => {
      console.log(response)
    })
    newMessage.value = ''
  }
}
</script>

<template>
  <div class="grid h-full w-full">
    <div
      class="relative flex h-[100%] min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2"
    >
      <ListMessage :messages="messages" />
      <form
        @submit.prevent="handleSend"
        class="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
      >
        <Label for="message" class="sr-only"> Message </Label>
        <Input
          id="message"
          v-model="newMessage"
          @keyup.enter="handleSend"
          placeholder="Nhập tin nhắn của bạn ở đây..."
          class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <div class="flex items-center p-3 pt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="icon">
                  <Paperclip class="size-4" />
                  <span class="sr-only">Attach file</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top"> Attach File </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="icon">
                  <Mic class="size-4" />
                  <span class="sr-only">Use Microphone</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top"> Use Microphone </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button type="submit" size="sm" class="ml-auto gap-1.5">
            Gửi tin nhắn
            <CornerDownLeft class="size-3.5" />
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>
