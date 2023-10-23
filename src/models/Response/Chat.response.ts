export class ChatResponse {
  readonly name!: string;
  readonly image!: string | number;
  readonly lastMessage?: string;
  readonly isSent!: boolean;
  readonly isGroup?: boolean;
  readonly members?: MemberResponse[];
  isSeen!: boolean;
  createdAt!: Date;
}

class MemberResponse {
  readonly name!: string;
  readonly image!: string | number;
}
