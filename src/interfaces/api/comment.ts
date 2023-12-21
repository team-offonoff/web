export interface CommentResponse {
  commentId: number;
  topicId: number;
  writer: Writer;
  writersVotedOption?: 'CHOICE_A' | 'CHOICE_B';
  content: string;
  likeCount: number;
  hateCount: number;
  liked: boolean;
  hated: boolean;
  createdAt: string;
}

interface Writer {
  id: number;
  nickname: string;
  profileImageUrl: string;
}
