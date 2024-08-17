import { Test, TestingModule } from '@nestjs/testing'
import { CodeHighlightersController } from './code-highlighters.controller'
import { CodeHighlightersService } from './code-highlighters.service'

describe('CodeHighlightersController', () => {
  let controller: CodeHighlightersController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeHighlightersController],
      providers: [CodeHighlightersService]
    }).compile()

    controller = module.get<CodeHighlightersController>(
      CodeHighlightersController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
