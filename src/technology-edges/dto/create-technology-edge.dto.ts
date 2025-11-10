import { IsString } from 'class-validator'

export class CreateTechnologyEdgeDto {
  @IsString()
  source: string

  @IsString()
  target: string
}
