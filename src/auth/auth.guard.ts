import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'
import { IS_PUBLIC_KEY } from 'src/services/is-public'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ])

    if (isPublic) {
      return true
    } else {
      const request = context.switchToHttp().getRequest()
      const token = this.extractTokenFromHeader(request)

      if (!token) {
        throw new UnauthorizedException()
      }
      try {
        await this.jwtService.verifyAsync(token)
      } catch {
        throw new UnauthorizedException()
      }
      return true
    }
  }

  private extractTokenFromHeader(request: Request) {
    const [type, token] = request?.headers?.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
}
