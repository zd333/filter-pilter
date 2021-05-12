import { Filter } from './filter.type';

export interface Place {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly filters: Array<Filter>;
}
