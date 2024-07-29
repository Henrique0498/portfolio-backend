interface Color {
  color: string
  type: string
}

export type ColorType =
  | 'background'
  | 'buttonLeft'
  | 'buttonRight'
  | 'icon'
  | 'iconBorder'

export interface InTechnologiesResponseDb {
  id: string
  name: string
  icon: string
  type: string
  positionX: number
  positionY: number
  colors: Color[]
}
