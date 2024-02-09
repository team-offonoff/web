import { LatestComment } from './comment';
import { TopicResponse } from './topic';

interface TopicVoteResponse {
  latestComment: LatestComment;
  topic: TopicResponse;
  choiceCounts: ChoiceCount[];
}

interface ChoiceCount {
  choiceOption: string;
  voteCount: number;
}

export type { TopicVoteResponse, ChoiceCount };
