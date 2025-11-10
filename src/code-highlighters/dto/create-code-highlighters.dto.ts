import { IsString } from 'class-validator'

export class CreateCodeHighlightersDto {
  @IsString()
  code: string

  @IsString()
  lang: string

  @IsString()
  theme: string
}
