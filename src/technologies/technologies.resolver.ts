import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql'
import { TechnologiesService } from './technologies.service'
import { TechnologyEntity } from './entities/technology.entity'
import { CreateTechnologyInput } from './dto/create-technology.input'
import { UpdateTechnologyInput } from './dto/update-technology.input'

@Resolver(() => TechnologyEntity)
export class TechnologiesResolver {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Mutation(() => TechnologyEntity, {
    name: 'createTechnology',
    nullable: true
  })
  async create(@Args('data') data: CreateTechnologyInput) {
    return this.technologiesService.create(data)
  }

  @Query(() => [TechnologyEntity], {
    name: 'findAllTechnologies',
    nullable: true
  })
  async findAll() {
    return this.technologiesService.findAll()
  }

  @Query(() => TechnologyEntity, { name: 'findOneTechnology', nullable: true })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.technologiesService.findOne(id)
  }

  @Mutation(() => TechnologyEntity, {
    name: 'updateTechnology',
    nullable: true
  })
  async update(@Args('data') data: UpdateTechnologyInput) {
    const { id } = data

    return this.technologiesService.update(id, data)
  }

  @Mutation(() => TechnologyEntity, {
    name: 'deleteTechnology',
    nullable: true
  })
  async delete(@Args('id', { type: () => ID }) id: string) {
    return this.technologiesService.delete(id)
  }
}
