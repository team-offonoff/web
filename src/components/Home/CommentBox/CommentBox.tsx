import { formatToKoreanNumber } from '@toss/utils';
import React from 'react';

import useReportTopic from '@apis/topic/useReportTopic';
import { Col } from '@components/commons/Flex/Flex';
import ActionModalButton from '@components/commons/Modal/ActionModalButton';
import Text from '@components/commons/Text/Text';
import { UserProfileImage } from '@components/Home/TopicCard/TopicCard.styles';
import useModal from '@hooks/useModal/useModal';
import { LatestComment } from '@interfaces/api/comment';
import { TopicResponse } from '@interfaces/api/topic';

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
  side: TopicResponse['topicSide'];
  keyword: TopicResponse['keyword'];
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

  const handleRevoteTopic = () => {
    throw new Error('투표 다시하기 기능을 사용할 수 없습니다.');
  };

  return (
    <CommentContainer>
      <CommentHeader>
        <KeywordContainer>
          <Text size={13} weight={'regular'} color={colors.purple}>
            {side === 'TOPIC_A' ? 'A' : 'B'} 사이드
          </Text>
          {keyword && (
            <>
              {' '}
              <Text size={14} weight={'regular'} color={colors.white_20}>
                |
              </Text>
              <Text size={13} weight={'regular'} color={colors.white_60}>
                {keyword.keywordName}
              </Text>
            </>
          )}
        </KeywordContainer>
        <button onClick={handleOnClickCommentMenu}>
          <MeatballIcon fill={colors.white_60} />
        </button>
      </CommentHeader>
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
      <Modal>
        <Col padding={'36px 24px'} gap={20}>
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
        </Col>
      </Modal>
    </CommentContainer>
  );
};

export default CommentBox;
