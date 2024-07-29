import { Field, InputType, Int } from '@nestjs/graphql'
import { IsInt, IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateTechnologyInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  name: string

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  icon: string

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  type: string

  @IsInt()
  @IsNotEmpty()
  @Field(() => Int)
  positionX: number

  @IsInt()
  @IsNotEmpty()
  @Field(() => Int)
  positionY: number
}
