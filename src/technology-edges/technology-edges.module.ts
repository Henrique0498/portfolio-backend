import { Module } from '@nestjs/common'
import { TechnologyEdgesService } from './technology-edges.service'
import { TechnologyEdgesController } from './technology-edges.controller'

@Module({
  providers: [TechnologyEdgesService],
  controllers: [TechnologyEdgesController]
})
export class TechnologyEdgesModule {}
