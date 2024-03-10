interface NotificationResponse {
  id: number;
  type: 'VOTE_RESULT' | 'VOTE_COUNT_ON_TOPIC' | 'COMMENT_ON_TOPIC' | 'LIKE_IN_COMMENT';
  receiverType: string;
  isRead: boolean;
  message: Message;
  createdAt: number;
}

interface Message {
  title: string;
  content: string;
  topicId: number;
  commentId: number;
}

export type { NotificationResponse, Message };
