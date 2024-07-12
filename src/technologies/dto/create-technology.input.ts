import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class CreateTechnologyInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  icon: string

  @Field(() => String)
  type: string

  @Field(() => Int)
  positionX: number

  @Field(() => Int)
  positionY: number
}
