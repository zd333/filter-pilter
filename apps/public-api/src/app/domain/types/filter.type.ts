import { Stage } from './stage.type';

export interface Filter {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly stages: Array<Stage>;
}
