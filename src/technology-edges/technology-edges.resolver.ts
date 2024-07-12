import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql'
import { TechnologyEdgesService } from './technology-edges.service'
import { TechnologyEdge } from './entities/technology-edge.entity'
import { CreateTechnologyEdgeInput } from './dto/create-technology-edge.input'
import { UpdateTechnologyEdgeInput } from './dto/update-technology-edge.input'

@Resolver(() => TechnologyEdge)
export class TechnologyEdgesResolver {
  constructor(
    private readonly technologyEdgesService: TechnologyEdgesService
  ) {}

  @Mutation(() => TechnologyEdge)
  createTechnologyEdge(
    @Args('createTechnologyEdgeInput')
    createTechnologyEdgeInput: CreateTechnologyEdgeInput
  ) {
    return this.technologyEdgesService.create(createTechnologyEdgeInput)
  }

  @Query(() => [TechnologyEdge], { name: 'technologyEdges' })
  findAll() {
    return this.technologyEdgesService.findAll()
  }

  @Query(() => TechnologyEdge, { name: 'technologyEdge' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.technologyEdgesService.findOne(id)
  }

  @Mutation(() => TechnologyEdge)
  updateTechnologyEdge(
    @Args('updateTechnologyEdgeInput')
    updateTechnologyEdgeInput: UpdateTechnologyEdgeInput
  ) {
    return this.technologyEdgesService.update(
      updateTechnologyEdgeInput.id,
      updateTechnologyEdgeInput
    )
  }

  @Mutation(() => TechnologyEdge)
  removeTechnologyEdge(@Args('id', { type: () => ID }) id: string) {
    return this.technologyEdgesService.delete(id)
  }
}
