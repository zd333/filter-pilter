import { FilterRepository, PlaceRepository } from './repositories';
import { FilterService, PlaceService } from './domain/services';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { PlaceResolver, FilterResolver } from './transport/graphql';

const services = [PlaceService, FilterService];
const repositories = [PlaceRepository, FilterRepository];
const resolvers = [PlaceResolver, FilterResolver];

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['libs/gql/src/sdl/**/*.graphql'],
    }),
  ],
  providers: [...repositories, ...services, ...resolvers],
})
export class AppModule {}
