export interface ShortMessage {
  id: string;
  content: string;
  from: string;
}

export interface Message {
  id: string;
  content: string;
  from: string;
  imDisplayName: string;
  originalArrivalTime: Date;
  conversationId: string;
  parentId: string;
  sequenceId: number;
  messageType: string;
  type: string;
  subject: string | null;
  title: string | null;
  reactions: Map<string, number> | null;
  replies: Message[] | null;
}

export interface Channel {
  id: string;
  displayName: string;
  lastMessage: ShortMessage;
}

export interface Team {
  creator: string;
  id: string;
  displayName: string;
  channels: Channel[];
}

export interface Chat {
  name: string;
}

export interface ConversationsResponse {
  chats: Chat[];
  teams: Team[];
}
