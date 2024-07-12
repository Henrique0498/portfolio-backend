import { Module } from '@nestjs/common'
import { TechnologyEdgesService } from './technology-edges.service'
import { TechnologyEdgesResolver } from './technology-edges.resolver'
import { TechnologyEdgesController } from './technology-edges.controller'

@Module({
  providers: [TechnologyEdgesResolver, TechnologyEdgesService],
  controllers: [TechnologyEdgesController]
})
export class TechnologyEdgesModule {}
