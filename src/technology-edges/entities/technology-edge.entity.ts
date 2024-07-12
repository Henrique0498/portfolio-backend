import { ObjectType, Field, ID } from '@nestjs/graphql'
import { TechnologyEdges } from '@prisma/client'

@ObjectType()
export class TechnologyEdge implements TechnologyEdges {
  @Field(() => ID)
  id: string

  @Field(() => ID)
  source: string

  @Field(() => ID)
  target: string
}
