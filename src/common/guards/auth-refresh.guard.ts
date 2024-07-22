import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'

import { GetToken } from 'src/helpers/get-token'

@Injectable()
export class AuthRefreshGuard implements CanActivate {
  constructor(private readonly getToken: GetToken) {}

  async canActivate(context: ExecutionContext) {
    const token = this.getToken.toContext(context)

    if (!token) {
      throw new UnauthorizedException()
    }

    return true
  }
}
