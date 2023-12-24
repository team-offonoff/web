import React from 'react';

import useReportTopic from '@apis/topic/useReportTopic';
import ActionModalButton from '@components/commons/Modal/ActionModalButton';
import Text from '@components/commons/Text/Text';
import { UserProfileImage } from '@components/Home/TopicCard/TopicCard.styles';
import useModal from '@hooks/useModal/useModal';
import { LatestComment } from '@interfaces/api/comment';

import { colors } from '@styles/theme';

import { HideIcon, MeatballIcon, RefreshIcon, ReportIcon } from '@icons/index';

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
  topicId: number;
  hasVoted: boolean;
  side: 'A' | 'B';
  keyword: string;
  commentCount: number;
  voteCount: number;
  latestComment: LatestComment | undefined;
}

const CommentBox = ({
  onClick,
  topicId,
  side,
  keyword,
  commentCount,
  voteCount,
  latestComment,
  hasVoted,
}: CommentBoxProps) => {
  const { Modal, toggleModal } = useModal('action');
  const reportMutation = useReportTopic(topicId);

  const handleOnClickCommentMenu = () => {
    toggleModal();
  };

  const handleHideTopic = () => {};

  const handleReportTopic = () => {
    reportMutation.mutate();
    toggleModal();
  };

  const handleRevoteTopic = () => {};

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
          <MeatballIcon fill={colors.white_60} />
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
            <UserProfileImage src={latestComment?.writer.profileImageUrl || ''} />
            <Text size={15} weight={'regular'} color={colors.white}>
              {latestComment?.content || ''}
            </Text>
          </Blur>
          {!hasVoted && <CommentButton>선택하고 댓글 보기</CommentButton>}
        </Comment>
      </CommnetBodyContainer>
      <Modal>
        <ActionModalButton
          handleClick={handleHideTopic}
          Icon={() => <HideIcon />}
          label={'이런 토픽은 안볼래요'}
        />
        <ActionModalButton
          handleClick={handleReportTopic}
          Icon={() => <ReportIcon />}
          label={'신고하기'}
        />
        <ActionModalButton
          handleClick={handleRevoteTopic}
          Icon={() => <RefreshIcon />}
          label={'투표 다시 하기'}
        />
      </Modal>
    </CommentContainer>
  );
};

export default CommentBox;
