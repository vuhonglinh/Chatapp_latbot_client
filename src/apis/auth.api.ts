import http from "@/lib/http"
import type {typeAuth, typeAuthCallback} from "@/types/auth";
import type {TypeResponse} from '@/types/core';
import {TypeUser} from "../types/auth";

export const authApi = {
  login: () => {
    return http.get<TypeResponse<null>>('auth/google')
  },
  callback: (data: typeAuthCallback) => {
    return http.post<TypeResponse<typeAuth>>('auth/google/callback', data)
  },
  logout: () => {
    return http.post<TypeResponse<null>>('logout')
  },
  profile: () => {
    return http.get<TypeResponse<TypeUser>>('profile')
  }
}
