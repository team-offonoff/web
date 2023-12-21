import { InfiniteData } from '@tanstack/query-core';
import React from 'react';

import { CommentResponse } from '@interfaces/api/comment';

import { PagingDataResponse } from '@interfaces/api';

import Comment from '../Comment/Comment';

interface TopicCommentsProps {
  topicId: number;
  comments: InfiniteData<PagingDataResponse<CommentResponse>> | undefined;
}

const TopicComments = ({ topicId, comments }: TopicCommentsProps) => {
  return (
    <div>
      {comments?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.data.map((comment) => (
            <Comment key={comment.commentId} comment={comment} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TopicComments;
