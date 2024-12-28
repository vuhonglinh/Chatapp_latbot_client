import http from "@/lib/http"
import type { typeAuth, typeAuthCallback, TypeUser } from "@/types/auth";
import type { TypeResponse } from '@/types/core';

export const userApi = {
  getUsers: () => {
    return http.get<TypeResponse<TypeUser[]>>('user')
  }
}
