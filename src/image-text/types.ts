export interface InImageTextGetSvg {
  text: string
  color: string
  opacity: string
}

export interface InImageTextMountBody extends InImageTextGetSvg {
  slice: number
  sliceOrderReverse: boolean
}
