import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Technologies } from '@prisma/client'

@ObjectType()
export class TechnologyEntity implements Technologies {
  @Field(() => ID)
  id: string

  @Field(() => String)
  icon: string

  @Field(() => String)
  name: string
}
