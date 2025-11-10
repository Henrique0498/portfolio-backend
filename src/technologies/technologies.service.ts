import { Injectable } from '@nestjs/common'
import { CreateTechnologyDto } from './dto/create-technology.dto'
import { UpdateTechnologyDto } from './dto/update-technology.dto'
import { PrismaService } from 'src/lib/prisma/prisma.service'
import { InTechnologiesResponseDb } from './interface/technologies-response-db'

@Injectable()
export class TechnologiesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateTechnologyDto) {
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

  async findOne(id: string): Promise<InTechnologiesResponseDb> {
    return this.prismaService.technologies.findUnique({
      where: {
        id
      },
      include: {
        colors: {
          select: {
            color: true,
            type: true
          },
          orderBy: {
            type: 'asc'
          }
        }
      }
    })
  }

  async update(id: string, data: UpdateTechnologyDto) {
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
