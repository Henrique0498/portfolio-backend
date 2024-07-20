import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'

import { GetToken } from 'src/helpers/get-token'
import { IS_PUBLIC_KEY } from 'src/services/is-public'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly getToken: GetToken,
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ])

    if (isPublic) {
      return true
    } else {
      const token = this.getToken.toContext(context)

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
}
