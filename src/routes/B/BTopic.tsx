import React from 'react';
import { useLocation } from 'react-router-dom';

import { usePreviewComment } from '@apis/comment/useComment';
import useReportTopic from '@apis/topic/useReportTopic';
import useVoteTopic from '@apis/topic/useVoteTopic';
import { Col, Row } from '@components/commons/Flex/Flex';
import BackButton from '@components/commons/Header/BackButton/BackButton';
import Layout from '@components/commons/Layout/Layout';
import ActionModalButton from '@components/commons/Modal/ActionModalButton';
import ProfileImg from '@components/commons/ProfileImg/ProfileImg';
import Text from '@components/commons/Text/Text';
import { Toast } from '@components/commons/Toast/Toast';
import ChoiceSlider from '@components/Home/ChoiceSlider/ChoiceSlider';
import CommentBox from '@components/Home/CommentBox/CommentBox';
import Timer from '@components/Home/Timer/Timer';
import {
  TopicCardContainer,
  TopicContainer,
  Topic,
  SelectTextContainer,
  TopicFooter,
} from '@components/Home/TopicCard/TopicCard.styles';
import TopicComments from '@components/Home/TopicComments/TopicComments';
import VoteCompletion from '@components/Home/VoteCompletion/VoteCompletion';
import useBottomSheet from '@hooks/useBottomSheet/useBottomSheet';
import useModal from '@hooks/useModal/useModal';
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

interface BTopicProps {
  topic: TopicResponse;
}

const BTopic = () => {
  const location = useLocation();
  const { BottomSheet: CommentSheet, toggleSheet } = useBottomSheet({});
  const { Modal, toggleModal } = useModal('action');
  const memberId = useAuthStore((store) => store.memberId);
  const { topic } = location.state as BTopicProps;
  const isMyTopic = topic.author.id === memberId;

  const { data: previewComment } = usePreviewComment(
    topic.topicId,
    topic.selectedOption !== null || isMyTopic
  );
  const voteMutation = useVoteTopic();
  const reportMutation = useReportTopic(topic.topicId);

  const handleVote = async (choiceOption: Choice['choiceOption']) => {
    try {
      await voteMutation.mutateAsync({
        topicId: topic.topicId,
        choiceOption: choiceOption,
        votedAt: new Date().getTime() / 1000,
      });
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

  const handleCommentBoxClick = () => {
    if (isMyTopic || topic.selectedOption !== null) {
      toggleSheet();
    }
  };

  const handleTopicOptionClick = () => {
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
    <React.Fragment>
      <Layout hasBottomNavigation={false} HeaderLeft={<BackButton />}>
        <TopicCardContainer>
          <Text size={18} color={colors.purple}>
            {topic.keyword?.keywordName}
          </Text>
          <TopicContainer>
            <Topic style={{ width: 170, wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
              {topic.topicTitle}
            </Topic>
          </TopicContainer>
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
            <ChoiceSlider onVote={handleVote} choices={topic.choices} />
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
              <Row gap={8} alignItems="center">
                <ProfileImg url={topic.author.profileImageUrl} size={'22px'} />
                <Text size={13} color={colors.white_60}>
                  {topic.author.nickname}
                </Text>
              </Row>
              <button onClick={handleTopicOptionClick}>
                <MeatballIcon fill={colors.white_60} />
              </button>
            </Row>
            <CommentBox
              hasVoted={topic.selectedOption !== null || isMyTopic}
              commentCount={topic.commentCount}
              voteCount={topic.voteCount}
              previewComment={previewComment}
              onClick={handleCommentBoxClick}
            />
          </TopicFooter>
        </TopicCardContainer>
      </Layout>
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

export default BTopic;
