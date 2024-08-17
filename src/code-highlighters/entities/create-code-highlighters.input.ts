import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateCodeHighlightersInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  code: string

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  theme: string

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  lang: string
}
