import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

@Injectable()
export class GithubService {
  private _githubToken = process.env.GITHUB_TOKEN
  private baseUrl = 'https://api.github.com'

  constructor() {}

  async github(url: string, options?: RequestInit) {
    const { data, ok } = await fetch(`${this.baseUrl}/${url}`, {
      headers: {
        Authorization: 'Bearer ' + this._githubToken
      },
      ...options
    }).then(async (response) => {
      const data = await response.json()
      const { ok } = response

      return { data, ok }
    })

    if (!ok) {
      throw new HttpException('Failed Dependency', HttpStatus.FAILED_DEPENDENCY)
    }

    return data
  }
}
