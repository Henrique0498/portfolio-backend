import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateTechnologyInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  icon: string
}
