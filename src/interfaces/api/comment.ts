export interface CommentResponse {
  commentId: number;
  topicId: number;
  writer: Writer;
  writersVotedOption: 'CHOICE_A' | 'CHOICE_B' | null;
  content: string;
  commentReaction: CommentReaction;
  createdAt: number;
}

export interface CommentReaction {
  likeCount: number;
  hateCount: number;
  liked: boolean;
  hated: boolean;
}

interface Writer {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
}

interface LatestComment {
  commentId: number;
  topicId: number;
  writer: Writer;
  writersVotedOption: string;
  content: string;
  commentReaction: CommentReaction;
  createdAt: number;
}

export type { Writer, LatestComment };
