import { Module } from '@nestjs/common'
import { GraphqlModule } from './graphql/graphql.module'
import { TechnologiesModule } from './technologies/technologies.module'
import { PrismaModule } from './lib/prisma/prisma.module'
import { TechnologyThemeModule } from './technology-theme/technology-theme.module'

@Module({
  imports: [
    PrismaModule,
    GraphqlModule,
    TechnologiesModule,
    TechnologyThemeModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
