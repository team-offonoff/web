import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { CommentReaction, CommentResponse } from '@interfaces/api/comment';

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

const reactComment = (commentId: number, reaction: 'like' | 'hate', enable: boolean) => {
  return client.post<CommentReaction>({
    path: `/comments/${commentId}/${reaction}?enable=${enable}`,
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

const useLatestComment = (topicId: number, enabled: boolean) => {
  return useQuery({
    queryKey: [COMMENT_KEY, 'latest', topicId],
    queryFn: () => getComments({ topicId: topicId, page: 0, size: 1 }),
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

const useReactComment = (topicId: number, commentId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reaction, enable }: { reaction: 'like' | 'hate'; enable: boolean }) =>
      reactComment(commentId, reaction, enable),
    onSuccess: (data: CommentReaction) => {
      queryClient.setQueryData(
        [COMMENT_KEY, topicId],
        (oldData: InfiniteData<PagingDataResponse<CommentResponse>, unknown> | undefined) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            pages: oldData.pages.map((page) => {
              return {
                ...page,
                data: page.data.map((comment) =>
                  comment.commentId === commentId ? { ...comment, commentReaction: data } : comment
                ),
              };
            }),
          };
        }
      );
    },
  });
};

export { COMMENT_KEY, useComments, useCreateComment, useReactComment, useLatestComment };
