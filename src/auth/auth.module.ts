import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'

@Module({
  providers: [],
  controllers: [AuthController]
})
export class AuthModule {}
