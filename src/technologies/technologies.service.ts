import { Injectable } from '@nestjs/common'
import { CreateTechnologyInput } from './dto/create-technology.input'
import { UpdateTechnologyInput } from './dto/update-technology.input'
import { PrismaService } from 'src/lib/prisma/prisma.service'

@Injectable()
export class TechnologiesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateTechnologyInput) {
    const technology = await this.prismaService.technologies.create({
      data
    })

    return technology
  }

  async findAll() {
    const technologies = await this.prismaService.technologies.findMany({
      orderBy: {
        name: 'desc'
      },
      include: {
        colors: true
      }
    })

    return technologies
  }

  async findOne(id: string) {
    const technologies = await this.prismaService.technologies.findUnique({
      where: {
        id
      }
    })

    return technologies
  }

  async update(id: string, data: UpdateTechnologyInput) {
    const technologies = await this.prismaService.technologies.update({
      where: {
        id
      },
      data
    })

    return technologies
  }

  async delete(id: string) {
    await this.prismaService.technologies.delete({
      where: {
        id
      }
    })
  }
}
