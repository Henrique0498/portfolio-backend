import { Test, TestingModule } from '@nestjs/testing'
import { TechnologyEdgesController } from './technology-edges.controller'

describe('TechnologyEdgesController', () => {
  let controller: TechnologyEdgesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnologyEdgesController]
    }).compile()

    controller = module.get<TechnologyEdgesController>(
      TechnologyEdgesController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
