import { InputType } from '@nestjs/graphql'
import { IsDate, IsJWT, IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateAuthInput {
  @IsString()
  @IsNotEmpty()
  readonly origin: string

  @IsJWT()
  @IsNotEmpty()
  readonly token: string

  @IsDate()
  @IsNotEmpty()
  readonly expires: Date
}
