import { Test, TestingModule } from '@nestjs/testing'
import { TechnologyThemeResolver } from './technology-theme.resolver'
import { TechnologyThemeService } from './technology-theme.service'

describe('TechnologyThemeResolver', () => {
  let resolver: TechnologyThemeResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnologyThemeResolver, TechnologyThemeService]
    }).compile()

    resolver = module.get<TechnologyThemeResolver>(TechnologyThemeResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
