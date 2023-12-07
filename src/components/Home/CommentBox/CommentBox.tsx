import React from 'react';

import Text from '@components/commons/Text/Text';
import { UserProfileImage } from '@components/Home/TopicCard/TopicCard.styles';

import { colors } from '@styles/theme';

import { MeatballIcon } from '@icons/index';

import {
  CommentContainer,
  CommentHeader,
  KeywordContainer,
  CommentInfoContainer,
  Comment,
  HighlightText,
  Blur,
  CommentButton,
} from './CommentBox.styles';

interface CommentBoxProps {
  hasVoted: boolean;
  side: 'A' | 'B';
  keyword: string;
  commentCount: number;
  voteCount: number;
  topComment: string;
}

const CommentBox = ({
  side,
  keyword,
  commentCount,
  voteCount,
  topComment,
  hasVoted,
}: CommentBoxProps) => {
  return (
    <CommentContainer>
      <CommentHeader>
        <KeywordContainer>
          <Text size={13} weight={'regular'} color={colors.purple}>
            {side} 사이드
          </Text>
          <Text size={14} weight={'regular'} color={colors.white_20}>
            |
          </Text>
          <Text size={13} weight={'regular'} color={colors.white_60}>
            {keyword}
          </Text>
        </KeywordContainer>
        <MeatballIcon />
      </CommentHeader>
      <CommentInfoContainer>
        <Text size={14} weight={600} color={colors.white_60}>
          <HighlightText>{commentCount}천개</HighlightText>의 댓글
        </Text>
        <Text size={14} weight={600} color={colors.white_60}>
          <HighlightText>{voteCount}명</HighlightText>이 선택했어요
        </Text>
      </CommentInfoContainer>
      <Comment>
        <Blur isVote={hasVoted}>
          <UserProfileImage />
          <Text size={15} weight={'regular'} color={colors.white}>
            {topComment}
          </Text>
        </Blur>
        {!hasVoted && <CommentButton>선택하고 댓글 보기</CommentButton>}
      </Comment>
    </CommentContainer>
  );
};

export default CommentBox;
