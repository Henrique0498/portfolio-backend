import { Module } from '@nestjs/common'
import { ImageTextController } from './image-text.controller'
import { ImageTextService } from './image-text.service'

@Module({
  controllers: [ImageTextController],
  providers: [ImageTextService]
})
export class ImageTextModule {}
