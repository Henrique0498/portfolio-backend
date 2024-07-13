import { Test, TestingModule } from '@nestjs/testing'
import { ImageTextController } from './image-text.controller'

describe('ImageTextController', () => {
  let controller: ImageTextController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageTextController],
      providers: []
    }).compile()

    controller = module.get<ImageTextController>(ImageTextController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
