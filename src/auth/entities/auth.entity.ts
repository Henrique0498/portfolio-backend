import { Token } from '@prisma/client'

export class AuthEntity implements Token {
  id: string

  origin: string

  token: string

  expires: Date

  created: Date

  updated: Date
}
