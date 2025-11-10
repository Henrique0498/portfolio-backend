import { ExecutionContext, Injectable } from '@nestjs/common'
import { Request } from 'express'

@Injectable()
export class GetToken {
  toContext(context: ExecutionContext) {
    const typeRequest = context.getType()
    let token = context.switchToHttp().getRequest()?.cookies.token as string

    if (!token && typeRequest === 'http') {
      const request = context.switchToHttp().getRequest()

      token = this.toRequest(request)
    }

    return token
  }

  toRequest(request: Request) {
    const [_, bearerToken] = request?.headers?.authorization?.split(' ') ?? []

    if (!bearerToken) {
      return request.cookies.token
    }

    return bearerToken
  }

  private toArray(value: string[]) {
    const findToken = value.find((item) => item.includes('Bearer'))
    const [type, token] = findToken?.split(' ') ?? []

    return type === 'Bearer' ? token : null
  }
}
