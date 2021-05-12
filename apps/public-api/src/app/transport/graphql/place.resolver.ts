import { Args, Query, Resolver } from '@nestjs/graphql';
import { Place } from '@gql';
import { PlaceService } from '../../domain/services';

@Resolver('Place')
@Resolver()
export class PlaceResolver {
  constructor(private readonly placeService: PlaceService) {}

  @Query('userPlaces')
  public async getUserPlaces(
    @Args('userId') userId: string
  ): Promise<Array<Place>> {
    return this.placeService.getByUserId(userId);
  }
}
