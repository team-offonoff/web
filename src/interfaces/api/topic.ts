export const CHOICE_OPTIONS = {
  CHOICE_A: 'CHOICE_A',
  CHOICE_B: 'CHOICE_B',
} as const;

interface TopicResponse {
  topicId: number;
  topicSide: 'TOPIC_A' | 'TOPIC_B';
  topicTitle: string;
  deadline: number | null; // 1702914494
  voteCount: number;
  commentCount: number;
  topicContent: string | null;
  keyword: Keyword | null;
  choices: Choice[];
  author: Author;
  createdAt: number;
  selectedOption: typeof CHOICE_OPTIONS.CHOICE_A | typeof CHOICE_OPTIONS.CHOICE_B | null;
}

export interface TopicCreateRequestDTO {
  side: string;
  keywordName: string | null;
  title: string;
  choices: ChoiceRequest[];
  deadline: number | null;
}

interface ChoiceRequest {
  choiceContentRequest: ChoiceContent;
  choiceOption: typeof CHOICE_OPTIONS.CHOICE_A | typeof CHOICE_OPTIONS.CHOICE_B;
}

interface Choice {
  choiceId: number;
  content: ChoiceContent;
  choiceOption: typeof CHOICE_OPTIONS.CHOICE_A | typeof CHOICE_OPTIONS.CHOICE_B;
  voteCount: number;
}

interface ChoiceContent {
  text: null | string;
  imageUrl: null | string;
  type: string;
}

interface Keyword {
  keywordId: number;
  keywordName: string;
  topicSide: string;
}

interface Author {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
}

export type { TopicResponse, Choice, ChoiceContent, Keyword, Author };
