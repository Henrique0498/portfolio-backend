import { Controller, Get, Query } from '@nestjs/common'
import { GithubService } from './github.service'

@Controller('v1/github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get()
  async getUser() {
    return this.githubService.github('users/Henrique0498')
  }

  @Get('/repos')
  async getProjects(
    @Query('per_page ') per_page = 12,
    @Query('sort') sort = 'updated'
  ) {
    const params = `sort=${sort}&per_page=${per_page}&visibility=public`

    return this.githubService.github(`users/Henrique0498/repos?${params}`)
  }
}
