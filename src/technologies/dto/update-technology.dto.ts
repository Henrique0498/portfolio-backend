import { PartialType } from '@nestjs/mapped-types'
import { CreateTechnologyDto } from './create-technology.dto'
import { IsString, IsOptional } from 'class-validator'

export class UpdateTechnologyDto extends PartialType(CreateTechnologyDto) {
  @IsString()
  @IsOptional()
  id?: string
}
