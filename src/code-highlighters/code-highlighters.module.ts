import { Module } from '@nestjs/common'
import { CodeHighlightersService } from './code-highlighters.service'
import { CodeHighlightersController } from './code-highlighters.controller'

@Module({
  controllers: [CodeHighlightersController],
  providers: [CodeHighlightersService]
})
export class CodeHighlightersModule {}
