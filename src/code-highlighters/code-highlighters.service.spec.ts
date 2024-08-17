import { Test, TestingModule } from '@nestjs/testing'
import { CodeHighlightersService } from './code-highlighters.service'

describe('CodeHighlightersService', () => {
  let service: CodeHighlightersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeHighlightersService]
    }).compile()

    service = module.get<CodeHighlightersService>(CodeHighlightersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
