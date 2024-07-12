import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { Technologies } from '@prisma/client'
import { TechnologyThemeEntity } from 'src/technology-theme/entities/technology-theme.entity'

@ObjectType()
export class TechnologyEntity implements Technologies {
  @Field(() => ID)
  id: string

  @Field(() => String)
  icon: string

  @Field(() => String)
  name: string

  @Field(() => String)
  type: string

  @Field(() => Int)
  positionX: number

  @Field(() => Int)
  positionY: number

  @Field(() => [TechnologyThemeEntity], { nullable: 'itemsAndList' })
  colors: TechnologyThemeEntity
}
