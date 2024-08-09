import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { join } from 'node:path'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile:
        process.env.BUILD === 'production'
          ? true
          : join(process.cwd(), 'graphql/schema.gql')
    })
  ]
})
export class GraphqlModule {}
