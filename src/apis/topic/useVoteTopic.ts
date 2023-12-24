import { useMutation } from '@tanstack/react-query';

import { LatestComment } from '@interfaces/api/comment';
import { Choice } from '@interfaces/api/topic';

import client from '@apis/fetch';

interface VoteTopicRequest {
  topicId: number;
  choiceOption: Choice['choiceOption'];
  votedAt: number;
}

const voteTopic = ({ topicId, choiceOption, votedAt }: VoteTopicRequest) => {
  return client.post<LatestComment>({
    path: `/topics/${topicId}/vote`,
    body: {
      choiceOption,
      votedAt,
    },
  });
};

const useVoteTopic = () => {
  return useMutation({
    mutationFn: (params: VoteTopicRequest) => voteTopic(params),
  });
};

export default useVoteTopic;
