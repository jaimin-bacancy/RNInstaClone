export class NotesResponse {
  readonly media?: ChatMediaResponse;
  readonly name!: string;
  readonly image!: string | number;
}

export class ChatMediaResponse {
  readonly type!: string;
  readonly data?: MusicMediaResponse | NoteMediaResponse;
}

export class MusicMediaResponse {
  readonly title!: string;
  readonly artist!: string;
}

export class NoteMediaResponse {
  readonly note!: string;
}
