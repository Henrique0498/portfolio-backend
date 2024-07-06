import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { TechnologyThemeService } from './technology-theme.service'
import { UpdateTechnologyThemeInput } from './dto/update-technology-theme.input'
import { CreateTechnologyThemeInput } from './dto/create-technology-theme.input'

@Controller('v1/technologyTheme')
export class TechnologyThemeController {
  constructor(
    private readonly technologyThemeService: TechnologyThemeService
  ) {}

  @Get()
  async findAll() {
    return this.technologyThemeService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.technologyThemeService.findOne(id)
  }

  @Post()
  async create(@Body() createDto: CreateTechnologyThemeInput) {
    return this.technologyThemeService.create(createDto)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: UpdateTechnologyThemeInput
  ) {
    return this.technologyThemeService.update(id, updateData)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.technologyThemeService.delete(id)
  }
}
