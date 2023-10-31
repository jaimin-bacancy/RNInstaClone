import { ChatResponse } from '@/models';

export const ChatsData: ChatResponse[] = [
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: false,
    createdAt: new Date(),
    lastMessage: 'Reacted 😂 to your message',
    isSent: false,
  },
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: true,
    createdAt: new Date(),
    lastMessage: 'Sent a reel by xyz page',
    isSent: false,
  },
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: true,
    createdAt: new Date(2023, 10, 23, 12, 20, 15),
    isSent: true,
  },
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: true,
    createdAt: new Date(),
    lastMessage: 'Sent a reel by xyz page',
    isSent: false,
    isGroup: true,
    members: [
      {
        name: 'User 1',
        image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
      },
      {
        name: 'User 1',
        image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
      },
    ],
  },
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: true,
    createdAt: new Date(),
    isSent: false,
    lastMessage: 'Reacted 😂 to your message',
  },
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: true,
    createdAt: new Date(2023, 10, 23, 12, 20, 15),
    isSent: true,
  },
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: false,
    createdAt: new Date(),
    isSent: false,
    lastMessage: 'Reacted 😂 to your message',
  },
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: false,
    createdAt: new Date(),
    isSent: false,
    lastMessage: 'Reacted 😂 to your message',
  },
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: true,
    createdAt: new Date(),
    isSent: false,
    lastMessage: 'Reacted 😂 to your message',
  },
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: true,
    createdAt: new Date(),
    isSent: false,
    lastMessage: 'Reacted 😂 to your message',
  },
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: true,
    createdAt: new Date(2023, 10, 23, 12, 20, 15),
    isSent: true,
  },
  {
    name: 'User 1',
    image: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
    isViewed: true,
    createdAt: new Date(2023, 0, 1, 0, 0, 15),
    isSent: true,
  },
];
