import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
  Res
} from '@nestjs/common'
import { ImageTextService } from './image-text.service'
import { Public } from 'src/services/is-public'
import { Response } from 'express'

@Controller('v1/image/texts')
export class ImageTextController {
  constructor(private imageTextService: ImageTextService) {}

  @Public()
  @Get()
  findAll(
    @Res() response: Response,
    @Query('text') text: string,
    @Query('color') color = 'rgb(0,0,0,0.04)',
    @Query('opacity') opacity = '1'
  ) {
    const regex = /^[a-zA-Z0-9]{3,6}$/
    const validationColor = color.includes('rgb') ? false : !regex.test(color)

    if (!text) {
      throw new HttpException('Text not inserting', HttpStatus.BAD_REQUEST)
    } else if (validationColor) {
      throw new HttpException('Color not supported', HttpStatus.BAD_REQUEST)
    }

    const modifiedColor = color.includes('rgb') ? color : '#' + color
    const svgContent = this.imageTextService.getSvg({
      color: modifiedColor,
      text,
      opacity
    })

    response.setHeader('Content-Type', 'image/svg+xml')
    response.setHeader(
      'Cache-Control',
      'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
    )

    response.send(svgContent)
  }
}
