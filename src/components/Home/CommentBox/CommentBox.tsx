import React from 'react';

import { ActionModal } from '@components/commons/Modal/Modal';
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
  CommnetBodyContainer,
} from './CommentBox.styles';

interface CommentBoxProps {
  onClick: () => void;
  hasVoted: boolean;
  side: 'A' | 'B';
  keyword: string;
  commentCount: number;
  voteCount: number;
  topComment: string;
}

const CommentBox = ({
  onClick,
  side,
  keyword,
  commentCount,
  voteCount,
  topComment,
  hasVoted,
}: CommentBoxProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOnClickCommentMenu = () => {
    setIsModalOpen(true);
  };

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
        <button onClick={handleOnClickCommentMenu}>
          <MeatballIcon />
        </button>
      </CommentHeader>
      <CommnetBodyContainer onClick={onClick}>
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
      </CommnetBodyContainer>
      <ActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div style={{ height: 190 }}>모달</div>
      </ActionModal>
    </CommentContainer>
  );
};

export default CommentBox;
