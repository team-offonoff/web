/* eslint-disable @typescript-eslint/no-explicit-any */
interface TopicResponse {
  topicId: number;
  topicSide: string;
  topicTitle: string;
  deadline?: any; // TBD
  voteCount: number;
  topicContent?: any; // TBD
  keywords: Keyword[];
  choices: Choice[];
  author?: any; // TBD
}

interface Choice {
  choiceId: number;
  content: ChoiceContent;
  choiceOption: string;
}

interface ChoiceContent {
  text: string;
  imageUrl?: string;
  type: string;
}

interface Keyword {
  keywordId: number;
  keywordName: string;
  topicSide: string;
}

export type { TopicResponse, Choice, ChoiceContent, Keyword };
