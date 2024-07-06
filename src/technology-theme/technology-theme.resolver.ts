import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql'
import { TechnologyThemeService } from './technology-theme.service'
import { TechnologyThemeEntity } from './entities/technology-theme.entity'
import { CreateTechnologyThemeInput } from './dto/create-technology-theme.input'
import { UpdateTechnologyThemeInput } from './dto/update-technology-theme.input'

@Resolver(() => TechnologyThemeEntity)
export class TechnologyThemeResolver {
  constructor(
    private readonly technologyThemeService: TechnologyThemeService
  ) {}

  @Mutation(() => TechnologyThemeEntity, {
    name: 'createTechnologyTheme',
    nullable: true
  })
  createTechnologyTheme(
    @Args('data')
    data: CreateTechnologyThemeInput
  ) {
    return this.technologyThemeService.create(data)
  }

  @Query(() => [TechnologyThemeEntity], {
    name: 'findAllTechnologyTheme',
    nullable: true
  })
  findAll() {
    return this.technologyThemeService.findAll()
  }

  @Query(() => TechnologyThemeEntity, {
    name: 'findOneTechnologyTheme',
    nullable: true
  })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.technologyThemeService.findOne(id)
  }

  @Mutation(() => TechnologyThemeEntity, {
    name: 'updateTechnologyTheme',
    nullable: true
  })
  updateTechnologyTheme(
    @Args('data')
    data: UpdateTechnologyThemeInput
  ) {
    return this.technologyThemeService.update(data.id, data)
  }

  @Mutation(() => TechnologyThemeEntity, {
    name: 'deleteTechnologyTheme',
    nullable: true
  })
  removeTechnologyTheme(@Args('id', { type: () => ID }) id: string) {
    return this.technologyThemeService.delete(id)
  }
}
