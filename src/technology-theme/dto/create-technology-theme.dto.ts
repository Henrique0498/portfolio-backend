import { IsString } from 'class-validator'

export class CreateTechnologyThemeDto {
  @IsString()
  idTech: string

  @IsString()
  color: string

  @IsString()
  type: string
}
