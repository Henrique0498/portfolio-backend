import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateTokenFrontendInput {
  @Field(() => String)
  publicKey: string
}
