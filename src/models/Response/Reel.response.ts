import { MusicMediaResponse } from './Notes.response';

export class ReelResponse {
  readonly name!: string;
  readonly userImage!: string;
  readonly uri!: string;
  readonly media!: MusicMediaResponse;
  readonly stats!: StatsResponse;
  isLike!: boolean;
}

export class StatsResponse {
  like!: number;
  readonly comment!: number;
  readonly share!: number;
}
