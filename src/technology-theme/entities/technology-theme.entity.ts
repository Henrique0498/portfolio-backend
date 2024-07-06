import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class TechnologyThemeEntity {
  @Field(() => ID)
  id: string

  @Field(() => String)
  color: string

  @Field(() => ID)
  idTech: string

  @Field(() => String)
  type: string
}
