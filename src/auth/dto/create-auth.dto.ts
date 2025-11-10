import { IsString, IsDateString } from 'class-validator'

export class CreateAuthDto {
  @IsString()
  token: string

  @IsString()
  origin: string

  @IsDateString()
  expires: Date
}
