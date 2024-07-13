import { Module } from '@nestjs/common'
import { GraphqlModule } from './graphql/graphql.module'
import { TechnologiesModule } from './technologies/technologies.module'
import { PrismaModule } from './lib/prisma/prisma.module'
import { TechnologyThemeModule } from './technology-theme/technology-theme.module'
import { AuthModule } from './auth/auth.module'
import { JwtModule } from '@nestjs/jwt'
import { AuthGuard } from './auth/auth.guard'
import { APP_GUARD } from '@nestjs/core'
import { IS_PRIVATE_KEY } from './services/is-public'
import { GithubModule } from './github/github.module'
import { UsersModule } from './users/users.module'
import { TechnologyEdgesModule } from './technology-edges/technology-edges.module'
import { ImageTextModule } from './image-text/image-text.module';

@Module({
  imports: [
    JwtModule.register({
      privateKey: IS_PRIVATE_KEY,
      secret: IS_PRIVATE_KEY,
      global: true,
      signOptions: {
        expiresIn: '1h'
      }
    }),
    PrismaModule,
    GraphqlModule,
    TechnologiesModule,
    TechnologyThemeModule,
    AuthModule,
    GithubModule,
    UsersModule,
    TechnologyEdgesModule,
    ImageTextModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
