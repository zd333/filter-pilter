import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Filter, Place } from '@gql';
import { PlaceService } from '../../domain/services';

@Resolver('Place')
export class AuthorsResolver {
  constructor(private readonly placeService: PlaceService) {}

  @Query('userPlaces')
  public async getUserPlaces(
    @Args('userId') userId: string
  ): Promise<Array<Partial<Place>>> {
    return this.placeService.getByUserId(userId);
  }

  @ResolveField('filters')
  public async getPlaceFilters(@Parent() place: Place): Promise<Array<Filter>> {
    // TODO: implement
    return [];
  }
}
