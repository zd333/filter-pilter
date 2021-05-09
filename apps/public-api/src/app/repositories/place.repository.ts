import { Injectable } from '@nestjs/common';
import { Place } from '../domain/types';

@Injectable()
export class PlaceRepository {
  public async getByUserId(userId: string): Promise<Array<Place>> {
    // TODO: implement
    return [];
  }
}
