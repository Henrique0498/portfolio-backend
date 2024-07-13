import { Test, TestingModule } from '@nestjs/testing'
import { ImageTextService } from './image-text.service'

describe('ImageTextService', () => {
  let service: ImageTextService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageTextService]
    }).compile()

    service = module.get<ImageTextService>(ImageTextService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
