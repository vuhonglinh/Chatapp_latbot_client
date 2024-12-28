import http from "@/lib/http"
import type { typeAuth, typeAuthCallback } from "@/types/auth";
import type { TypeResponse } from '@/types/core';

export const authApi = {
  login: () => {
    return http.get<TypeResponse<{ data: string }>>('auth/google')
  },
  callback: (data: typeAuthCallback) => {
    return http.post<TypeResponse<typeAuth>>('auth/google/callback', data)
  },
  logout: () => {
    return http.post<TypeResponse<null>>('logout')
  }
}
