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
    @Query('visibility') visibility: string,
    @Query('visibility') per_page: number,
    @Query('sort') sort = 'updated',
    @Query('page') page: number
  ) {
    let params = `sort=${sort}`

    if (visibility) {
      params += `visibility=${visibility}`
    }
    if (per_page) {
      params += `per_page=${per_page}`
    }
    if (page) {
      params += `page=${page}`
    }

    return this.githubService.github(`users/Henrique0498/repos?${params}`)
  }

  @Get('/repos/all')
  async getProjectsAll(
    @Query('visibility') visibility: string,
    @Query('visibility') per_page: number,
    @Query('sort') sort = 'updated',
    @Query('page') page: number
  ) {
    let params = `sort=${sort}`

    if (visibility) {
      params += `visibility=${visibility}`
    }
    if (per_page) {
      params += `per_page=${per_page}`
    }
    if (page) {
      params += `page=${page}`
    }

    return this.githubService.github(`user/repos?${params}`)
  }
}
