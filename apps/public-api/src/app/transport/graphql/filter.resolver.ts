import { Args, Query, Resolver } from '@nestjs/graphql';
import { Filter } from '@gql';
import { FilterService } from '../../domain/services';

@Resolver('Filter')
@Resolver()
export class FilterResolver {
  constructor(private readonly filterService: FilterService) {}

  @Query('userFilters')
  public async getUserFilters(
    @Args('userId') userId: string
  ): Promise<Array<Filter>> {
    return this.filterService.getByUserId(userId);
  }
}
