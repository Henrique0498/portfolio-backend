import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { CreateTechnologyEdgeDto } from './dto/create-technology-edge.dto'
import { TechnologyEdgesService } from './technology-edges.service'
import { UpdateTechnologyEdgeDto } from './dto/update-technology-edge.dto'

@Controller('v1/technologyEdges')
export class TechnologyEdgesController {
  constructor(
    private readonly technologyEdgesService: TechnologyEdgesService
  ) {}

  @Get()
  async findAll() {
    return this.technologyEdgesService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.technologyEdgesService.findOne(id)
  }

  @Post()
  async create(@Body() data: CreateTechnologyEdgeDto) {
    return this.technologyEdgesService.create(data)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTechnologyEdgeDto) {
    return this.technologyEdgesService.update(id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.technologyEdgesService.delete(id)
  }
}
