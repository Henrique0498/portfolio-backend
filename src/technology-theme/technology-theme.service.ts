import { Injectable } from '@nestjs/common'
import { CreateTechnologyThemeDto } from './dto/create-technology-theme.dto'
import { UpdateTechnologyThemeDto } from './dto/update-technology-theme.dto'
import { PrismaService } from 'src/lib/prisma/prisma.service'

@Injectable()
export class TechnologyThemeService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateTechnologyThemeDto) {
    const color = await this.prismaService.technologyTheme.create({ data })

    return color
  }

  async findAll() {
    const colors = await this.prismaService.technologyTheme.findMany()

    return colors
  }

  async findAllFromId(id: string) {
    const colors = await this.prismaService.technologyTheme.findMany({
      where: { idTech: id }
    })

    return colors
  }

  async findOne(id: string) {
    const color = await this.prismaService.technologyTheme.findFirst({
      where: { id }
    })

    return color
  }

  async update(id: string, data: UpdateTechnologyThemeDto) {
    const color = await this.prismaService.technologyTheme.update({
      where: { id },
      data
    })

    return color
  }

  async delete(id: string) {
    await this.prismaService.technologyTheme.delete({ where: { id } })
  }
}
