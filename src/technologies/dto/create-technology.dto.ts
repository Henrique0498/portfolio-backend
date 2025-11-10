import { IsString, IsInt } from 'class-validator'

export class CreateTechnologyDto {
  @IsString()
  name: string

  @IsString()
  icon: string

  @IsString()
  type: string

  @IsInt()
  positionX: number

  @IsInt()
  positionY: number
}
