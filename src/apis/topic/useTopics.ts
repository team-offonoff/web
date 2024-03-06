import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

import { PresignedURLResponse } from '@interfaces/api/profile';
import { TopicCreateRequestDTO, TopicResponse } from '@interfaces/api/topic';

import { PagingDataResponse } from '@interfaces/api';

import client from '@apis/fetch';

export const TOPIC_KEY = 'topics';

export interface TopicsRequestDTO {
  status?: 'VOTING' | 'CLOSED';
  keyword_id?: number;
  page?: number;
  size?: number;
  sort?: string;
  side?: 'TOPIC_A' | 'TOPIC_B';
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

const getPresignedURL = (fileName: string) => {
  return client.post<PresignedURLResponse>({
    path: `/images/topic`,
    body: {
      fileName: fileName,
    },
  });
};

const useCreateTopics = () => {
  return useMutation({ mutationFn: createTopics });
};

const useGetPresignedURL = () => {
  return useMutation({ mutationFn: (fileName: string) => getPresignedURL(fileName) });
};

export default useTopics;

export { useCreateTopics, useGetPresignedURL };
