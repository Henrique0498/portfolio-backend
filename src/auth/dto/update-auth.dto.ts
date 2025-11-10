import { PartialType } from '@nestjs/mapped-types'
import { CreateAuthDto } from './create-auth.dto'
import { IsString, IsOptional } from 'class-validator'

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @IsString()
  @IsOptional()
  id?: string
}
