import { Test, TestingModule } from '@nestjs/testing'
import { TechnologyEdgesResolver } from './technology-edges.resolver'
import { TechnologyEdgesService } from './technology-edges.service'

describe('TechnologyEdgesResolver', () => {
  let resolver: TechnologyEdgesResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnologyEdgesResolver, TechnologyEdgesService]
    }).compile()

    resolver = module.get<TechnologyEdgesResolver>(TechnologyEdgesResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
