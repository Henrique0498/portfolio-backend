import { Module } from '@nestjs/common'
import { TechnologiesService } from './technologies.service'
import { TechnologiesResolver } from './technologies.resolver'
import { TechnologiesController } from './technologies.controller'

@Module({
  providers: [TechnologiesResolver, TechnologiesService],
  controllers: [TechnologiesController]
})
export class TechnologiesModule {}
