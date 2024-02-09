import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Choice, TopicResponse } from '@interfaces/api/topic';
import { TopicVoteResponse } from '@interfaces/api/vote';

import { PagingDataResponse } from '@interfaces/api';

import client from '@apis/fetch';

import { TOPIC_KEY, TopicsRequestDTO } from './useTopics';

interface VoteTopicRequest {
  topicId: number;
  choiceOption: Choice['choiceOption'];
  votedAt: number;
}

const voteTopic = ({ topicId, choiceOption, votedAt }: VoteTopicRequest) => {
  return client.post<TopicVoteResponse>({
    path: `/topics/${topicId}/vote`,
    body: {
      choiceOption,
      votedAt,
    },
  });
};

const useVoteTopic = (req?: TopicsRequestDTO) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: VoteTopicRequest) => voteTopic(params),
    onSuccess: (data, variables: VoteTopicRequest) => {
      queryClient.setQueryData(
        [TOPIC_KEY, ...(req ? [req] : [])],
        (prev: PagingDataResponse<TopicResponse>) => {
          return {
            data: prev.data.map((topic) => {
              return topic.topicId === variables.topicId ? { ...data.topic } : { ...topic };
            }),
            pageInfo: prev.pageInfo,
          };
        }
      );
    },
  });
};

export default useVoteTopic;
