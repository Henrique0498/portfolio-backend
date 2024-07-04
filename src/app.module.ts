import { Module } from '@nestjs/common'
import { GraphqlModule } from './graphql/graphql.module'
import { TechnologiesModule } from './technologies/technologies.module'
import { PrismaModule } from './lib/prisma/prisma.module'

@Module({
  imports: [PrismaModule, GraphqlModule, TechnologiesModule],
  controllers: [],
  providers: []
})
export class AppModule {}
