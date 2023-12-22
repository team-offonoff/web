import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { CommentResponse } from '@interfaces/api/comment';

import { PagingDataResponse } from '@interfaces/api';

import client from '@apis/fetch';

const COMMENT_KEY = 'comments';

const getComments = ({ topicId, page, size }: { topicId: number; page: number; size: number }) => {
  return client.get<PagingDataResponse<CommentResponse>>(
    `/comments?topic-id=${topicId}&page=${page}&size=${size}`
  );
};

const createComments = ({ topicId, content }: { topicId: number; content: string }) => {
  return client.post<CommentResponse>({
    path: `/comments`,
    body: {
      topicId: topicId,
      content: content,
    },
  });
};

const reactComment = (commentId: number, reaction: 'like' | 'hate') => {
  return client.post<CommentResponse>({
    path: `/comments/${commentId}/${reaction}?enable=true`,
    body: {},
  });
};

const useComments = (topicId: number, enabled: boolean) => {
  return useInfiniteQuery({
    queryKey: [COMMENT_KEY, topicId],
    queryFn: (params) => getComments({ topicId: topicId, page: params.pageParam, size: 20 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.pageInfo.last ? undefined : lastPage.pageInfo.page + 1,
    enabled: enabled,
  });
};

const useCreateComment = (topicId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ content }: { content: string }) => createComments({ topicId, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [COMMENT_KEY, topicId] });
    },
  });
};

const useReactComment = (topicId: number, commentId: number, reaction: 'like' | 'hate') => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => reactComment(commentId, reaction),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [COMMENT_KEY, topicId] });
    },
  });
};

export { COMMENT_KEY, useComments, useCreateComment, useReactComment };
