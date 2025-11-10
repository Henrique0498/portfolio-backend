import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/lib/prisma/prisma.service'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateAuthDto) {
    const token = await this.prismaService.token.create({ data })

    return token
  }

  async getOneFromToken(token: string) {
    const resultToken = await this.prismaService.token.findFirst({
      where: {
        token
      }
    })

    return resultToken
  }

  async getOneFromIP(origin: string) {
    const resultToken = await this.prismaService.token.findFirst({
      where: {
        origin
      }
    })

    return resultToken
  }

  async update(id: string, data: UpdateAuthDto) {
    const token = await this.prismaService.token.update({
      where: {
        id
      },
      data
    })

    return token
  }
}
