import { formatToKoreanNumber } from '@toss/utils';
import React, { memo, useState } from 'react';

import { useComments, useCreateComment } from '@apis/comment/useComment';
import { Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import { TopicResponse } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import Comment from '../Comment/Comment';

import {
  CommentInput,
  CommentInputContainer,
  CommentsContainer,
  EmptyCommentContainer,
  TopicCommentsContainer,
  TopicCommentsHeader,
} from './TopicComments.styles';

interface TopicCommentsProps {
  topic: TopicResponse;
}

const TopicComments = memo(({ topic }: TopicCommentsProps) => {
  const { data, fetchNextPage } = useComments(topic.topicId);
  const commentMutation = useCreateComment(topic.topicId);
  const [newComment, setNewComment] = useState('');

  const commentCount = data?.pages[0].pageInfo.total;

  const comments = React.useMemo(() => data?.pages.flatMap((page) => page.data), [data]);

  return (
    <TopicCommentsContainer>
      <TopicCommentsHeader className="draggable">
        <Row className="draggable">
          <Text className="draggable" size={18} weight={500} color={colors.black}>
            {formatToKoreanNumber(commentCount || 0)}개
          </Text>
          <Text className="draggable" size={18} weight={500} color={colors.black_40}>
            의 댓글
          </Text>
        </Row>
      </TopicCommentsHeader>
      {commentCount !== 0 ? (
        <CommentsContainer>
          {comments?.map((comment) => (
            <Comment key={comment.commentId} comment={comment} choices={topic.choices} />
          ))}
        </CommentsContainer>
      ) : (
        <EmptyCommentContainer>
          <Text size={16} color={colors.black_80}>
            가장 먼저 댓글을 작성해 보세요!
          </Text>
        </EmptyCommentContainer>
      )}

      <CommentInputContainer>
        <CommentInput
          type="text"
          placeholder="댓글 쓰기"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
              e.preventDefault();
              commentMutation.mutate({ content: newComment });
              setNewComment('');
            }
          }}
        />
      </CommentInputContainer>
    </TopicCommentsContainer>
  );
});

export default TopicComments;
