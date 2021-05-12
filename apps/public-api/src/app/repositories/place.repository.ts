import { Injectable } from '@nestjs/common';
import { Place } from '../domain/types';

@Injectable()
export class PlaceRepository {
  public async getByUserId(_: string): Promise<Array<Place>> {
    // TODO: replace stub with real implementation
    return [{
      id: 'some-place-id',
      title: 'Wonderful apartment',
      filters: [{
        id: 'some-filter-id',
        title: 'Kitchen-filter',
        stages: [
          {
            id: 'some-filter-stage-id',
            title: 'Main stage'
          }
        ]
      }],
    }];
  }
}
