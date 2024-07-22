import { Module } from '@nestjs/common'
import { GetToken } from './get-token'

@Module({
  providers: [GetToken],
  exports: [GetToken]
})
export class SharedModule {}
