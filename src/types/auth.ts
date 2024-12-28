
export type typeUser = {
  name: string
  avatar: string
  date_of_birth: string
  gender: string
  slug: string
  email: string
  phone_number: string
  status: string
}

export type typeToken = {
  accessToken: string,
  refreshToken: string
}

export type typeAuthCallback = {
  code?: string
  scope?: string
  authuser?: string,
  prompt?: string
}

export type typeAuth = {
  user?: typeUser
  token?: typeToken
}
