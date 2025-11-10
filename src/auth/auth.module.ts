import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { GetToken } from 'src/helpers/get-token'
import { AuthRefreshGuard } from '../common/guards/auth-refresh.guard'

@Module({
  providers: [AuthService, GetToken, AuthRefreshGuard],
  controllers: [AuthController]
})
export class AuthModule {}
