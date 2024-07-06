import { CreateTechnologyThemeInput } from './create-technology-theme.input'
import { InputType, Field, PartialType, ID } from '@nestjs/graphql'

@InputType()
export class UpdateTechnologyThemeInput extends PartialType(
  CreateTechnologyThemeInput
) {
  @Field(() => ID)
  id: string
}
