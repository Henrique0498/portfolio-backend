import { Module } from '@nestjs/common'
import { TechnologyThemeService } from './technology-theme.service'
import { TechnologyThemeResolver } from './technology-theme.resolver'
import { TechnologyThemeController } from './technology-theme.controller'

@Module({
  providers: [TechnologyThemeResolver, TechnologyThemeService],
  controllers: [TechnologyThemeController]
})
export class TechnologyThemeModule {}
