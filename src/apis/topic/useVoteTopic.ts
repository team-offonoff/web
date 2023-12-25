import { useMutation, useQueryClient } from '@tanstack/react-query';

import { LatestComment } from '@interfaces/api/comment';
import { Choice, TopicResponse } from '@interfaces/api/topic';

import { PagingDataResponse } from '@interfaces/api';

import client from '@apis/fetch';

import { TOPIC_KEY } from './useTopics';

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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: VoteTopicRequest) => voteTopic(params),
    onSuccess: (data, variables: VoteTopicRequest) => {
      queryClient.setQueryData([TOPIC_KEY], (prev: PagingDataResponse<TopicResponse>) => {
        return {
          data: prev.data.map((topic) => {
            return topic.topicId === variables.topicId
              ? { ...topic, selectedOption: variables.choiceOption }
              : { ...topic };
          }),
          pageInfo: prev.pageInfo,
        };
      });
    },
  });
};

export default useVoteTopic;
