import { InfiniteData } from '@tanstack/query-core';
import React from 'react';

import { Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import { CommentResponse } from '@interfaces/api/comment';

import { PagingDataResponse } from '@interfaces/api';

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
  topicId: number;
  comments: InfiniteData<PagingDataResponse<CommentResponse>> | undefined;
}

const TopicComments = ({ topicId, comments }: TopicCommentsProps) => {
  return (
    <TopicCommentsContainer>
      <TopicCommentsHeader className="draggable">
        <Row className="draggable">
          <Text className="draggable" size={18} weight={500} color={colors.black}>
            1천개
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
        <CommentInput type="text" placeholder="댓글 쓰기" />
      </CommentInputContainer>
    </TopicCommentsContainer>
  );
};

export default TopicComments;
