import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { GetToken } from 'src/helpers/get-token'

@Module({
  providers: [AuthService, GetToken],
  controllers: [AuthController]
})
export class AuthModule {}
