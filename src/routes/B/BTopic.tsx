import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useLatestComment } from '@apis/comment/useComment';
import useVoteTopic from '@apis/topic/useVoteTopic';
import BackButton from '@components/commons/Header/BackButton/BackButton';
import Layout from '@components/commons/Layout/Layout';
import ProfileImg from '@components/commons/ProfileImg/ProfileImg';
import Text from '@components/commons/Text/Text';
import ChoiceSlider from '@components/Home/ChoiceSlider/ChoiceSlider';
import CommentBox from '@components/Home/CommentBox/CommentBox';
import Timer from '@components/Home/Timer/Timer';
import {
  TopicCardContainer,
  BestTopicCotainer,
  TopicContainer,
  Topic,
  UserInfoContainer,
  SelectTextContainer,
} from '@components/Home/TopicCard/TopicCard.styles';
import TopicComments from '@components/Home/TopicComments/TopicComments';
import VoteCompletion from '@components/Home/VoteCompletion/VoteCompletion';
import useBottomSheet from '@hooks/useBottomSheet/useBottomSheet';
import { LatestComment } from '@interfaces/api/comment';
import { Choice, TopicResponse } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { LeftDoubleArrowIcon, RightDoubleArrowIcon } from '@icons/index';

interface BTopicProps {
  topic: TopicResponse;
}

const BTopic = () => {
  const location = useLocation();
  const { topic } = location.state as BTopicProps;
  const { BottomSheet: CommentSheet, toggleSheet } = useBottomSheet({});
  const voteMutation = useVoteTopic();
  const { data: latestCommentData, isSuccess } = useLatestComment(
    topic.topicId,
    topic.selectedOption !== null
  );
  const [latestComment, setLatestComment] = useState<LatestComment | undefined>();

  const handleVote = async (choiceOption: Choice['choiceOption']) => {
    const data = await voteMutation.mutateAsync({
      topicId: topic.topicId,
      choiceOption: choiceOption,
      votedAt: new Date().getTime() / 1000,
    });
    setLatestComment(data.latestComment);
    return true;
  };

  const handleCommentBoxClick = () => {
    if (topic.selectedOption !== null) {
      toggleSheet();
    }
  };

  return (
    <React.Fragment>
      <Layout hasBottomNavigation={false} HeaderLeft={<BackButton />}>
        <TopicCardContainer>
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
          <CommentBox
            side={topic.topicSide}
            hasVoted={topic.selectedOption !== null}
            topicId={topic.topicId}
            commentCount={0}
            voteCount={0}
            keyword={topic.keyword}
            latestComment={latestComment}
            onClick={handleCommentBoxClick}
          />
        </TopicCardContainer>
      </Layout>
      <CommentSheet>
        <TopicComments topic={topic} />
      </CommentSheet>
    </React.Fragment>
  );
};

export default BTopic;
