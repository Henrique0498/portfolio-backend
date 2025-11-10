import { TechnologyEdges } from '@prisma/client'

export class TechnologyEdge implements TechnologyEdges {
  id: string
  source: string
  target: string
}
