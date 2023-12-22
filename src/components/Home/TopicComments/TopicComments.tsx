import React, { useState } from 'react';

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
  TopicCommentsContainer,
  TopicCommentsHeader,
} from './TopicComments.styles';

interface TopicCommentsProps {
  topic: TopicResponse;
}

const TopicComments = ({ topic }: TopicCommentsProps) => {
  const { data: comments, fetchNextPage } = useComments(
    topic.topicId,
    topic.selectedOption !== null
  );
  const commentMutation = useCreateComment(topic.topicId);
  const [newComment, setNewComment] = useState('');

  const commentCount = comments?.pages.reduce((acc, page) => {
    return acc + page.data.length;
  }, 0);

  return (
    <TopicCommentsContainer>
      <TopicCommentsHeader className="draggable">
        <Row className="draggable">
          <Text className="draggable" size={18} weight={500} color={colors.black}>
            {commentCount}개
          </Text>
          <Text className="draggable" size={18} weight={500} color={colors.black_40}>
            의 댓글
          </Text>
        </Row>
      </TopicCommentsHeader>
      <CommentsContainer>
        {comments?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.data.map((comment) => (
              <Comment key={comment.commentId} comment={comment} />
            ))}
          </React.Fragment>
        ))}
      </CommentsContainer>
      <CommentInputContainer>
        <CommentInput
          type="text"
          placeholder="댓글 쓰기"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              commentMutation.mutate({ content: newComment });
              setNewComment('');
            }
          }}
        />
      </CommentInputContainer>
    </TopicCommentsContainer>
  );
};

export default TopicComments;
