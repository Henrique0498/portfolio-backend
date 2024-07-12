import { Test, TestingModule } from '@nestjs/testing'
import { TechnologyEdgesService } from './technology-edges.service'

describe('TechnologyEdgesService', () => {
  let service: TechnologyEdgesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnologyEdgesService]
    }).compile()

    service = module.get<TechnologyEdgesService>(TechnologyEdgesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
