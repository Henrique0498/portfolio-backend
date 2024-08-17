import { Module } from '@nestjs/common'
import { TechnologiesModule } from './technologies/technologies.module'
import { PrismaModule } from './lib/prisma/prisma.module'
import { TechnologyThemeModule } from './technology-theme/technology-theme.module'
import { AuthModule } from './auth/auth.module'
import { JwtModule } from '@nestjs/jwt'
import { AuthGuard } from './common/guards/auth.guard'
import { APP_GUARD } from '@nestjs/core'
import { IS_PRIVATE_KEY } from './services/is-public'
import { GithubModule } from './github/github.module'
import { UsersModule } from './users/users.module'
import { TechnologyEdgesModule } from './technology-edges/technology-edges.module'
import { ImageTextModule } from './image-text/image-text.module'
import { SharedModule } from './helpers/shared.module'
import { CodeHighlightersModule } from './code-highlighters/code-highlighters.module';

@Module({
  imports: [
    JwtModule.register({
      privateKey: IS_PRIVATE_KEY,
      secret: IS_PRIVATE_KEY,
      global: true
    }),
    SharedModule,
    PrismaModule,
    TechnologiesModule,
    TechnologyThemeModule,
    AuthModule,
    GithubModule,
    UsersModule,
    TechnologyEdgesModule,
    ImageTextModule,
    CodeHighlightersModule
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
