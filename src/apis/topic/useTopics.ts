import { useMutation, useQuery } from '@tanstack/react-query';

import { TopicCreateRequestDTO, TopicResponse } from '@interfaces/api/topic';

import { PagingDataResponse } from '@interfaces/api';

import client from '@apis/fetch';

export const TOPIC_KEY = 'topics';

const getTopics = () => {
  return client.get<PagingDataResponse<TopicResponse>>('/topics/info?size=100');
};

const useTopics = () => {
  return useQuery({ queryKey: [TOPIC_KEY], queryFn: getTopics });
};

const createTopics = (req: TopicCreateRequestDTO) => {
  return client.post({
    path: `/topics`,
    body: req,
  });
};

const useCreateTopics = () => {
  return useMutation({ mutationFn: createTopics });
};

export default useTopics;

export { useCreateTopics };
