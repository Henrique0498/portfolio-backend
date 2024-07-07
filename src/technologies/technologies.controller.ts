import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { TechnologiesService } from './technologies.service'
import { UpdateTechnologyInput } from './dto/update-technology.input'
import { CreateTechnologyInput } from './dto/create-technology.input'

@Controller('v1/technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Get()
  async findAll() {
    return this.technologiesService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.technologiesService.findOne(id)
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
}
