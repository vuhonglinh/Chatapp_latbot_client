
export type TypeUser = {
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
  access_token: string,
  refresh_token: string
}

export type typeAuthCallback = {
  code?: string
  scope?: string
  authuser?: string,
  prompt?: string
}

export type typeAuth = {
  user?: TypeUser
  token?: typeToken
}
