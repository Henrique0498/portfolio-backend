import { Injectable } from '@nestjs/common'
import { InImageTextGetSvg, InImageTextMountBody } from './types'

@Injectable()
export class ImageTextService {
  getSvg(props: InImageTextGetSvg): string {
    const header = `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='200px'>`
    const footer = '</svg>'

    return `
      ${header}
        ${this.mountBody({ ...props, slice: 0, sliceOrderReverse: true })}
        ${this.mountBody({ ...props, slice: 3, sliceOrderReverse: false })}
        ${this.mountBody({ ...props, slice: 3, sliceOrderReverse: true })}
      ${footer}
    `
  }

  private mountBody({
    color,
    opacity,
    slice,
    sliceOrderReverse,
    text
  }: InImageTextMountBody) {
    const repeat = slice === 0 ? 16 : 17
    const propsX = 5 * 0
    const propsY = slice === 0 ? '27%' : sliceOrderReverse ? '93%' : '60%'
    const header = `<text x='${propsX}' y='${propsY}' fill='${color}' opacity='${opacity}' font-size='4rem' font-weight='600' font-family='Roobert,Helvetica Neue,Helvetica,Arial,sans-serif'>`
    const footer = '</text>'

    const arrayWords = []

    for (let i = 0; i <= repeat; i++) {
      if (i !== 0 && i !== repeat) {
        arrayWords.push(text)
      } else if (i === 0) {
        const newText = sliceOrderReverse
          ? text.slice(slice, text.length)
          : text.slice(text.length - slice)

        arrayWords.push(newText)
      } else {
        const newText = sliceOrderReverse
          ? text.slice(text.length - slice)
          : text.slice(slice, text.length)
        arrayWords.push(newText)
      }
    }

    return `${header}${arrayWords.join(' ')}${footer}`
  }
}
