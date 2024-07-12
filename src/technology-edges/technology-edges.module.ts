import { Module } from '@nestjs/common'
import { TechnologyEdgesService } from './technology-edges.service'
import { TechnologyEdgesResolver } from './technology-edges.resolver'

@Module({
  providers: [TechnologyEdgesResolver, TechnologyEdgesService]
})
export class TechnologyEdgesModule {}
