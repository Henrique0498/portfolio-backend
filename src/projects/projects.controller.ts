import { Controller, Get } from '@nestjs/common'
import { ProjectsService } from './projects.service'

@Controller('v1/projectsMain')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll() {
    return this.projectsService.findAll()
  }
}
