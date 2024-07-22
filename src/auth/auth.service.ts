import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/lib/prisma/prisma.service'
import { CreateAuthInput } from './dto/create-auth.input'
import { UpdateAuthInput } from './dto/update-auth.input'

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateAuthInput) {
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

  async update(id: string, data: UpdateAuthInput) {
    const token = await this.prismaService.token.update({
      where: {
        id
      },
      data
    })

    return token
  }
}
