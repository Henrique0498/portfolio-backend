import { Test, TestingModule } from '@nestjs/testing'
import { TechnologyThemeService } from './technology-theme.service'

describe('TechnologyThemeService', () => {
  let service: TechnologyThemeService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnologyThemeService]
    }).compile()

    service = module.get<TechnologyThemeService>(TechnologyThemeService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
