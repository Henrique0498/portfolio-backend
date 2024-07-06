import { Test, TestingModule } from '@nestjs/testing'
import { TechnologyThemeController } from './technology-theme.controller'

describe('TechnologyThemeController', () => {
  let controller: TechnologyThemeController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnologyThemeController]
    }).compile()

    controller = module.get<TechnologyThemeController>(
      TechnologyThemeController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
