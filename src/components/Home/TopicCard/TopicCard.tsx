import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSwiperSlide } from 'swiper/react';

import { useLatestComment } from '@apis/comment/useComment';
import useReportTopic from '@apis/topic/useReportTopic';
import useVoteTopic from '@apis/topic/useVoteTopic';
import { Col, Row } from '@components/commons/Flex/Flex';
import ActionModalButton from '@components/commons/Modal/ActionModalButton';
import ProfileImg from '@components/commons/ProfileImg/ProfileImg';
import Text from '@components/commons/Text/Text';
import { Toast } from '@components/commons/Toast/Toast';
import ChoiceSlider from '@components/Home/ChoiceSlider/ChoiceSlider';
import CommentBox from '@components/Home/CommentBox/CommentBox';
import Timer from '@components/Home/Timer/Timer';
import VoteCompletion from '@components/Home/VoteCompletion/VoteCompletion';
import useBottomSheet from '@hooks/useBottomSheet/useBottomSheet';
import useModal from '@hooks/useModal/useModal';
import { LatestComment } from '@interfaces/api/comment';
import { Choice, TopicResponse } from '@interfaces/api/topic';

import { useAuthStore } from '@store/auth';

import { colors } from '@styles/theme';

import {
  HideIcon,
  LeftDoubleArrowIcon,
  MeatballIcon,
  RefreshIcon,
  ReportIcon,
  RightDoubleArrowIcon,
} from '@icons/index';

import { ResponseError } from '@apis/fetch';

import TopicComments from '../TopicComments/TopicComments';

import {
  BestTopicCotainer,
  TopicContainer,
  Topic,
  UserInfoContainer,
  TopicCardContainer,
  SelectTextContainer,
  TopicFooter,
} from './TopicCard.styles';

interface TopicCardProps {
  topic: TopicResponse;
}

const TopicCard = ({ topic }: TopicCardProps) => {
  const [, setSearchParams] = useSearchParams();
  const memberId = useAuthStore((store) => store.memberId);
  const isMyTopic = topic.author.id === memberId;

  const swiperSlide = useSwiperSlide();
  const { BottomSheet: CommentSheet, toggleSheet } = useBottomSheet({});
  const voteMutation = useVoteTopic();
  const { data: latestCommentData, isSuccess } = useLatestComment(
    topic.topicId,
    topic.selectedOption !== null || isMyTopic
  );
  const [latestComment, setLatestComment] = useState<LatestComment | undefined>();
  const { Modal, toggleModal } = useModal('action');
  const reportMutation = useReportTopic(topic.topicId);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperSlide.isActive) {
      setSearchParams((searchParams) => {
        searchParams.set('topicId', topic.topicId.toString());
        return searchParams;
      });
    }
  }, [swiperSlide]);

  useEffect(() => {
    if (isSuccess) {
      setLatestComment(latestCommentData.data[0] as LatestComment);
    }
  }, [isSuccess]);

  const handleHideTopic = () => {};

  const handleReportTopic = () => {
    reportMutation.mutate();
    toggleModal();
  };

  const handleRevoteTopic = () => {
    throw new Error('투표 다시하기 기능을 사용할 수 없습니다.');
  };

  const handleOnClickCommentBox = () => {
    if (isMyTopic || topic.selectedOption !== null) {
      toggleSheet();
    }
  };

  const handleOnClickCommentMenu = () => {
    toggleModal();
  };

  const handleOnVote = async (choiceOption: Choice['choiceOption']) => {
    try {
      const data = await voteMutation.mutateAsync({
        topicId: topic.topicId,
        choiceOption: choiceOption,
        votedAt: new Date().getTime() / 1000,
      });
      setLatestComment(data.latestComment);
      return true;
    } catch (error) {
      if (error instanceof ResponseError) {
        if (error.errorData.abCode === 'VOTED_BY_AUTHOR') {
          Toast.error('토픽을 작성한 사람은 투표할 수 없어요');
        }
      }
      return false;
    }
  };

  return (
    <React.Fragment>
      <TopicCardContainer
        ref={containerRef}
        style={{
          marginBottom: containerRef.current
            ? window.innerHeight - containerRef.current.scrollHeight + 60
            : 0,
        }}
      >
        <BestTopicCotainer>
          <Text size={18} color={colors.purple}>
            실시간 인기 토픽
          </Text>
        </BestTopicCotainer>
        <TopicContainer>
          <Topic style={{ width: 170, wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
            {topic.topicTitle}
          </Topic>
        </TopicContainer>
        <UserInfoContainer>
          <ProfileImg url={topic.author.profileImageUrl} size={20} />
          <Text size={14} weight={'regular'} color={colors.white_60}>
            {topic.author.nickname}
          </Text>
        </UserInfoContainer>
        {topic.selectedOption !== null ? (
          <VoteCompletion
            side={topic.selectedOption === 'CHOICE_A' ? 'A' : 'B'}
            topicContent={
              topic.selectedOption === 'CHOICE_A'
                ? topic.choices[0]?.content?.text || 'A'
                : topic.choices[1]?.content?.text || 'B'
            }
          />
        ) : (
          <ChoiceSlider onVote={handleOnVote} choices={topic.choices} />
        )}
        {topic.deadline && <Timer endTime={topic.deadline} />}
        <SelectTextContainer $voted={topic.selectedOption !== null}>
          <LeftDoubleArrowIcon />
          <Text size={14} weight={'regular'} color={colors.white_40}>
            밀어서 선택하기
          </Text>
          <RightDoubleArrowIcon />
        </SelectTextContainer>
        <TopicFooter>
          <Row>
            <Row gap={6}>
              <Text size={13} weight={'regular'} color={colors.purple}>
                {topic.topicSide === 'TOPIC_A' ? 'A' : 'B'} 사이드
              </Text>
              {topic.keyword && (
                <>
                  <Text size={14} weight={'regular'} color={colors.white_20}>
                    |
                  </Text>
                  <Text size={13} weight={'regular'} color={colors.white_60}>
                    {topic.keyword.keywordName}
                  </Text>
                </>
              )}
            </Row>
            <button onClick={handleOnClickCommentMenu}>
              <MeatballIcon fill={colors.white_60} />
            </button>
          </Row>
          <CommentBox
            hasVoted={topic.selectedOption !== null || isMyTopic}
            commentCount={topic.commentCount}
            voteCount={topic.voteCount}
            latestComment={latestComment}
            onClick={handleOnClickCommentBox}
          />
        </TopicFooter>
      </TopicCardContainer>
      <CommentSheet>
        <TopicComments topic={topic} />
      </CommentSheet>
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
    </React.Fragment>
  );
};

export default TopicCard;
