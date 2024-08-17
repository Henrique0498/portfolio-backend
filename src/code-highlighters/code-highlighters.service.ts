import { Injectable } from '@nestjs/common'
import { InCodeCreate } from './interfaces/code-highlighters-create'

@Injectable()
export class CodeHighlightersService {
  private shiki: any

  constructor() {
    this.initializeShiki()
  }

  private async initializeShiki() {
    this.shiki = await import('shiki')
  }

  async create({ code, lang, theme }: InCodeCreate) {
    if (!this.shiki) {
      await this.initializeShiki()
    }

    return this.shiki.codeToHtml(code, {
      lang,
      theme
    })
  }
}
