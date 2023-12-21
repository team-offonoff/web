import { useInfiniteQuery } from '@tanstack/react-query';

import { CommentResponse } from '@interfaces/api/comment';

import { PagingDataResponse } from '@interfaces/api';

import client from '@apis/fetch';

const COMMENT_KEY = 'comments';

const getComments = ({ topicId, page, size }: { topicId: number; page: number; size: number }) => {
  return client.get<PagingDataResponse<CommentResponse>>(
    `/comments?topic-id=${topicId}&page=${page}&size=${size}`
  );
};

const useComments = (topicId: number) => {
  return useInfiniteQuery({
    queryKey: [COMMENT_KEY, topicId],
    queryFn: (params) => getComments({ topicId: topicId, page: params.pageParam, size: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.pageInfo.last ? undefined : lastPage.pageInfo.page + 1,
  });
};

export default useComments;
