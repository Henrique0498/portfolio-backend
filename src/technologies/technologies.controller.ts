import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { TechnologiesService } from './technologies.service'
import { UpdateTechnologyInput } from './dto/update-technology.input'
import { CreateTechnologyInput } from './dto/create-technology.input'
import {
  ColorType,
  InTechnologiesResponseDb
} from './interface/technologies-response-db'

type ColorMapping = {
  [key in ColorType]?: string
}

@Controller('v1/technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Get()
  async findAll() {
    const responseDb = this.technologiesService.findAll()

    if (!responseDb) {
      return new HttpException('Technology not found', HttpStatus.NOT_FOUND)
    }

    const result = (await responseDb).map((technology) =>
      this.formatResponseTechnology(technology)
    )

    return result
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const responseDb = await this.technologiesService.findOne(id)

    if (!responseDb) {
      return new HttpException('Technology not found', HttpStatus.NOT_FOUND)
    }

    return this.formatResponseTechnology(responseDb)
  }

  @Post()
  async create(@Body() createDto: CreateTechnologyInput) {
    return this.technologiesService.create(createDto)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: UpdateTechnologyInput
  ) {
    return this.technologiesService.update(id, updateData)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.technologiesService.delete(id)
  }

  private formatResponseTechnology(value: InTechnologiesResponseDb) {
    const colors = value.colors.reduce<ColorMapping>((acc, color) => {
      acc[color.type] = color.color
      return acc
    }, {})

    return {
      id: value.id,
      name: value.name,
      type: value.type,
      icon: value.icon,
      colors,
      position: {
        x: value.positionX,
        y: value.positionY
      }
    }
  }

  private toCamelCase(value: string) {
    return value
      .split('-')
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('')
  }
}
