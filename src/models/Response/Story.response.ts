import { MediaResponse } from './Media.response';

export class StoryResponse {
  readonly medias!: MediaResponse[];
  readonly name!: string;
  readonly isViewed!: boolean;
}
