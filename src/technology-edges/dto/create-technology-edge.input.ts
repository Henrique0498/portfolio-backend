import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class CreateTechnologyEdgeInput {
  @Field(() => ID)
  source: string

  @Field(() => ID)
  target: string
}
