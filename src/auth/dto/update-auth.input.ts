import { InputType, PartialType } from '@nestjs/graphql'
import { CreateAuthInput } from './create-auth.input'

@InputType()
export class UpdateAuthInput extends PartialType(CreateAuthInput) {}
