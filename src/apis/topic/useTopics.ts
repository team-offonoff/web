import { useQuery } from '@tanstack/react-query';

import { TopicResponse } from '@interfaces/api/topic';

import { PagingDataResponse } from '@interfaces/api';

import client from '@apis/fetch';

export const TOPIC_KEY = 'topics';

const getTopics = () => {
  return client.get<PagingDataResponse<TopicResponse>>('/topics/info/voting');
};

const useTopics = () => {
  return useQuery({ queryKey: [TOPIC_KEY], queryFn: getTopics });
};

export default useTopics;
