import { Injectable } from '@nestjs/common';
import { Filter } from '../types';
import { FilterRepository } from '../../repositories';

@Injectable()
export class FilterService {
  constructor(private readonly filterRepository: FilterRepository) {}

  public async getByUserId(userId: string): Promise<Array<Filter>> {
    return this.filterRepository.getByUserId(userId);
  }
}
