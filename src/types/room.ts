import type { TypeUser } from "@/types/auth"

export type TypeMessage = {
  id: string
  sender: TypeUser
  message: string
  status: string
  date: string
}
