import { PartialType } from '@nestjs/mapped-types'
import { CreateTechnologyThemeDto } from './create-technology-theme.dto'
import { IsString, IsOptional } from 'class-validator'

export class UpdateTechnologyThemeDto extends PartialType(
  CreateTechnologyThemeDto
) {
  @IsString()
  @IsOptional()
  id?: string
}
