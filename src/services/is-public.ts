import { SetMetadata } from '@nestjs/common'

export const IS_PUBLIC_KEY = process.env.PUBLIC_KEY
export const IS_PRIVATE_KEY = process.env.SECRET_KEY

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)
