import { PartialType } from '@nestjs/mapped-types'
import { CreateTechnologyEdgeDto } from './create-technology-edge.dto'
import { IsString, IsOptional } from 'class-validator'

export class UpdateTechnologyEdgeDto extends PartialType(
  CreateTechnologyEdgeDto
) {
  @IsString()
  @IsOptional()
  id?: string
}
