import http from "@/lib/http"
import type { typeAuth, typeAuthCallback } from "@/types/auth";
import type { TypeResponse } from '@/types/core';
import type { TypeMessage } from "@/types/room";

export const roomApi = {
  send: (data: { message: string, slug: string }) => {
    return http.post<TypeResponse<null>>('send/' + data.slug, data)
  },
  getMessages: (slug: string) => {
    return http.get<TypeResponse<TypeMessage>>('message/' + slug)
  },
}
