import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class CreateTechnologyThemeInput {
  @Field(() => String)
  color: string

  @Field(() => ID)
  idTech: string

  @Field(() => String)
  type: string
}
