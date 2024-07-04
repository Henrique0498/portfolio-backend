import { Test, TestingModule } from '@nestjs/testing'
import { TechnologiesController } from './technologies.controller'

describe('TechnologiesController', () => {
  let controller: TechnologiesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnologiesController]
    }).compile()

    controller = module.get<TechnologiesController>(TechnologiesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
