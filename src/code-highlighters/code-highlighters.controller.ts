import { Controller, Post, Body } from '@nestjs/common'
import { CodeHighlightersService } from './code-highlighters.service'
import { CreateCodeHighlightersDto } from './dto/create-code-highlighters.dto'

@Controller('v1/codeHighlighters')
export class CodeHighlightersController {
  constructor(
    private readonly codeHighlightersService: CodeHighlightersService
  ) {}

  @Post()
  create(@Body() data: CreateCodeHighlightersDto) {
    return this.codeHighlightersService.create(data)
  }
}
