import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
  UsePipes
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { defaultMessageUnauthorized } from 'src/services/messages'
import { AuthService } from './auth.service'
import { addMinutes } from 'date-fns'
import { Request } from 'express'
import { GetToken } from 'src/helpers/get-token'
import { InAuthPostPublic } from './interfaces/auth-public'
import { AuthValidatePublicPipe } from './pipes/auth-post-public.pipe'
import { Public } from 'src/services/is-public'
import { AuthRefreshGuard } from 'src/common/guards/auth-refresh.guard'

@Controller('v1/auth')
export class AuthController {
  private readonly firstTokenTime = 15

  constructor(
    private readonly serviceAuth: AuthService,
    private readonly jwtService: JwtService,
    private readonly getToken: GetToken
  ) {}

  @Public()
  @Post('/public')
  @UsePipes(AuthValidatePublicPipe)
  async publicFrontEnd(@Body() data: InAuthPostPublic) {
    const dbToken = await this.serviceAuth.getOneFromIP(data.ip)
    const { expires, token } = await this.generateToken(data.ip)

    try {
      if (dbToken) {
        await this.serviceAuth.update(dbToken.id, {
          expires,
          token
        })
      } else {
        await this.serviceAuth.create({
          expires,
          origin: data.ip,
          token
        })
      }

      return {
        access_token: token,
        expires
      }
    } catch (e) {
      throw new HttpException(
        'Error generating token or saving',
        HttpStatus.BAD_REQUEST
      )
    }
  }

  @Public()
  @UseGuards(AuthRefreshGuard)
  @Post('/refresh')
  async refresh(@Req() request: Request) {
    const requestToken = await this.getToken.toRequest(request)

    const dbToken = await this.serviceAuth.getOneFromToken(requestToken)

    if (!dbToken) {
      throw new UnauthorizedException(defaultMessageUnauthorized)
    }

    try {
      const { expires, token } = await this.generateToken(dbToken.origin)
      await this.serviceAuth.update(dbToken.id, {
        expires,
        token
      })

      return {
        access_token: token,
        expires
      }
    } catch (e) {
      throw new HttpException(
        'Error generating token or saving',
        HttpStatus.BAD_REQUEST
      )
    }
  }

  private async generateToken(origin: string, type = 'public') {
    const expires = addMinutes(new Date(), this.firstTokenTime)

    const token = await this.jwtService.signAsync({
      origin,
      type
    })

    return { expires, token }
  }
}
