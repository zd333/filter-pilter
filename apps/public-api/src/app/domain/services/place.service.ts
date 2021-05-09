import { Injectable } from '@nestjs/common';
import { Place } from '../types';
import { PlaceRepository } from '../../repositories';

@Injectable()
export class PlaceService {
  constructor(private readonly placeRepository: PlaceRepository) {}

  public async getByUserId(userId: string): Promise<Array<Place>> {
    return this.placeRepository.getByUserId(userId);
  }
}
