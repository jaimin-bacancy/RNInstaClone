import { MediaResponse } from './Media.response';

export class StoryResponse {
  readonly stories!: MediaResponse[];
  readonly name!: string;
  readonly isViewed!: boolean;
}
