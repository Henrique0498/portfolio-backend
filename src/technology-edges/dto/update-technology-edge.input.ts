import { CreateTechnologyEdgeInput } from './create-technology-edge.input'
import { InputType, Field, PartialType, ID } from '@nestjs/graphql'

@InputType()
export class UpdateTechnologyEdgeInput extends PartialType(
  CreateTechnologyEdgeInput
) {
  @Field(() => ID)
  id: string
}
