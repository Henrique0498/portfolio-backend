import { Technologies } from '@prisma/client'
import { TechnologyThemeEntity } from 'src/technology-theme/entities/technology-theme.entity'

export class TechnologyEntity implements Technologies {
  id: string
  icon: string
  name: string
  type: string
  positionX: number
  positionY: number
  colors: TechnologyThemeEntity
}
