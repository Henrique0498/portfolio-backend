import { CreateTechnologyInput } from './create-technology.input'
import { InputType, Field, PartialType, ID } from '@nestjs/graphql'

@InputType()
export class UpdateTechnologyInput extends PartialType(CreateTechnologyInput) {
  @Field(() => ID)
  id: string
}
