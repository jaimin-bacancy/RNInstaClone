import { MediaResponse } from './Media.response';

export class PostResponse {
  images!: MediaResponse[];
  name!: string;
  isLiked!: boolean;
}
