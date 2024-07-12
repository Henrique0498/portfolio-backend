import { Injectable } from '@nestjs/common'
import { CreateTechnologyEdgeInput } from './dto/create-technology-edge.input'
import { UpdateTechnologyEdgeInput } from './dto/update-technology-edge.input'
import { PrismaService } from 'src/lib/prisma/prisma.service'

@Injectable()
export class TechnologyEdgesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateTechnologyEdgeInput) {
    const edge = await this.prismaService.technologyEdges.create({ data })

    return edge
  }

  async findAll() {
    const edges = await this.prismaService.technologyEdges.findMany()

    return edges
  }

  async findOne(id: string) {
    const edge = await this.prismaService.technologyEdges.findUnique({
      where: {
        id
      }
    })

    return edge
  }

  async update(id: string, data: UpdateTechnologyEdgeInput) {
    const edge = await this.prismaService.technologyEdges.update({
      data,
      where: {
        id
      }
    })

    return edge
  }

  async delete(id: string) {
    await this.prismaService.technologyEdges.delete({
      where: {
        id
      }
    })
  }
}
