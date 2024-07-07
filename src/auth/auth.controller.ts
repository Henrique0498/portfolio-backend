import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { IS_PUBLIC_KEY, Public } from 'src/services/is-public'
import { CreateTokenFrontendInput } from './dto/creste-token-frontend.input'
import { defaultMessageUnauthorized } from 'src/services/messages'

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @Public()
  @Post('/public')
  async publicFrontEnd(@Body() data: CreateTokenFrontendInput) {
    if (!data.publicKey) {
      throw new UnauthorizedException(defaultMessageUnauthorized)
    } else if (data.publicKey !== IS_PUBLIC_KEY) {
      throw new UnauthorizedException(defaultMessageUnauthorized)
    }

    return {
      access_token: await this.jwtService.signAsync({})
    }
  }
}
