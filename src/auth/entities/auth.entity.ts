import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Token } from '@prisma/client'

@ObjectType()
export class AuthEntity implements Token {
  @Field(() => ID)
  id: string

  @Field(() => String)
  origin: string

  @Field(() => String)
  token: string

  @Field(() => Date)
  expires: Date

  @Field(() => Date)
  created: Date

  @Field(() => Date)
  updated: Date
}
