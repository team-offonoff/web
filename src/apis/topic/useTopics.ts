import { replaceEqualDeep, useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

import { TopicCreateRequestDTO, TopicResponse } from '@interfaces/api/topic';

import { PagingDataResponse } from '@interfaces/api';

import client from '@apis/fetch';

export const TOPIC_KEY = 'topics';

interface TopicsRequestDTO {
  status?: 'VOTING' | 'CLOSED';
  keyword_id?: number;
  page?: number;
  size?: number;
  sort?: 'voteCount' | 'desc';
}

const getTopics = (
  req: TopicsRequestDTO = { status: 'VOTING', page: 0, size: 10, sort: 'voteCount' }
) => {
  return client.get<PagingDataResponse<TopicResponse>>('/topics/info', req);
};

const useTopics = (req?: TopicsRequestDTO) => {
  return useInfiniteQuery({
    queryKey: [TOPIC_KEY, req],
    queryFn: ({ pageParam }) => getTopics({ ...req, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.pageInfo.last ? undefined : lastPage.pageInfo.page + 1;
    },
  });
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
