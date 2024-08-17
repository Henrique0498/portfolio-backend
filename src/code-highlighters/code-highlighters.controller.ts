import { Controller, Post, Body } from '@nestjs/common'
import { CodeHighlightersService } from './code-highlighters.service'
import { CreateCodeHighlightersInput } from './entities/create-code-highlighters.input'

@Controller('v1/codeHighlighters')
export class CodeHighlightersController {
  constructor(
    private readonly codeHighlightersService: CodeHighlightersService
  ) {}

  @Post()
  create(@Body() data: CreateCodeHighlightersInput) {
    return this.codeHighlightersService.create(data)
  }
}
