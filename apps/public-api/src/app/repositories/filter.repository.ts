import { Filter } from '../domain/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FilterRepository {
  public async getByUserId(_: string): Promise<Array<Filter>> {
    // TODO: replace stub with real implementation
    return [{
      id: 'some-filter-id',
      title: 'Kitchen-filter',
      stages: [
        {
          id: 'some-filter-stage-id',
          title: 'Main stage'
        }
      ]
    }];
  }
}
