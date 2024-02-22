import { formatToKoreanNumber } from '@toss/utils';
import React from 'react';

import Text from '@components/commons/Text/Text';
import { UserProfileImage } from '@components/Home/TopicCard/TopicCard.styles';
import { LatestComment } from '@interfaces/api/comment';

import { colors } from '@styles/theme';

import {
  CommentContainer,
  CommentInfoContainer,
  Comment,
  HighlightText,
  Blur,
  CommentButton,
  CommnetBodyContainer,
} from './CommentBox.styles';

interface CommentBoxProps {
  onClick: () => void;
  hasVoted: boolean;
  commentCount: number;
  voteCount: number;
  latestComment: LatestComment | undefined;
}

const CommentBox = ({
  onClick,
  commentCount,
  voteCount,
  latestComment,
  hasVoted,
}: CommentBoxProps) => {
  return (
    <CommentContainer>
      <CommnetBodyContainer onClick={onClick}>
        <CommentInfoContainer>
          <Text size={14} weight={600} color={colors.white_60}>
            <HighlightText>{formatToKoreanNumber(commentCount)}개</HighlightText>의 댓글
          </Text>
          <Text size={14} weight={600} color={colors.white_60}>
            <HighlightText>{formatToKoreanNumber(voteCount)}명</HighlightText>이 선택했어요
          </Text>
        </CommentInfoContainer>
        <Comment>
          <Blur $voted={hasVoted}>
            <UserProfileImage src={latestComment?.writer?.profileImageUrl || ''} />
            <Text size={15} weight={'regular'} color={colors.white}>
              {latestComment?.content || ''}
            </Text>
          </Blur>
          {!hasVoted && <CommentButton>선택하고 댓글 보기</CommentButton>}
        </Comment>
      </CommnetBodyContainer>
    </CommentContainer>
  );
};

export default CommentBox;
