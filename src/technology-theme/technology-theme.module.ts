import { Module } from '@nestjs/common'
import { TechnologyThemeService } from './technology-theme.service'
import { TechnologyThemeController } from './technology-theme.controller'

@Module({
  providers: [TechnologyThemeService],
  controllers: [TechnologyThemeController]
})
export class TechnologyThemeModule {}
