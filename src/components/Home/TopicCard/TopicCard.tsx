import React, { useState } from 'react';

import { useComments } from '@apis/comment/useComment';
import Text from '@components/commons/Text/Text';
import ChoiceSlider from '@components/Home/ChoiceSlider/ChoiceSlider';
import CommentBox from '@components/Home/CommentBox/CommentBox';
import Timer from '@components/Home/Timer/Timer';
import VoteCompletion from '@components/Home/VoteCompletion/VoteCompletion';
import useBottomSheet from '@hooks/useBottomSheet/useBottomSheet';
import { Choice, CHOICE_OPTIONS, TopicResponse } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { LeftDoubleArrowIcon, RightDoubleArrowIcon } from '@icons/index';

import TopicComments from '../TopicComments/TopicComments';

import {
  BestTopicCotainer,
  TopicContainer,
  Topic,
  UserInfoContainer,
  UserProfileImage,
  TopicCardContainer,
  SelectTextContainer,
} from './TopicCard.styles';

interface TopicCardProps {
  topic: TopicResponse;
}

const TopicCard = ({ topic }: TopicCardProps) => {
  const choices: Choice[] = [
    {
      choiceId: 0,
      content: {
        text: 'choiceA',
        imageUrl: 'imageUrl',
        type: 'IMAGE_TEXT',
      },
      choiceOption: CHOICE_OPTIONS.CHOICE_A,
    },
    {
      choiceId: 2,
      content: {
        text: 'Choice 2',
        imageUrl: 'undefined',
        type: 'text',
      },
      choiceOption: CHOICE_OPTIONS.CHOICE_B,
    },
  ];

  const [hasVoted, setHasVoted] = useState(false);
  const { BottomSheet: CommentSheet, toggleSheet } = useBottomSheet({});

  const handleOnClickCommentBox = () => {
    if (hasVoted) {
      toggleSheet();
    }
  };

  const handleOnVote = (choiceId: number) => {
    setHasVoted(true);
  };

  return (
    <React.Fragment>
      <TopicCardContainer>
        <BestTopicCotainer>
          <Text size={18} color={colors.purple}>
            실시간 인기 토픽
          </Text>
        </BestTopicCotainer>
        <TopicContainer>
          <Topic>{topic.topicTitle}</Topic>
        </TopicContainer>
        <UserInfoContainer>
          <UserProfileImage src={topic.author.profileImageUrl} />
          <Text size={14} weight={'regular'} color={colors.white_60}>
            {topic.author.nickname}
          </Text>
        </UserInfoContainer>
        {hasVoted ? (
          <VoteCompletion side={'A'} topicContent={'10년 전 과거로가기'}></VoteCompletion> // TODO: 선택 완료 컴포넌트
        ) : (
          <ChoiceSlider onVote={handleOnVote} choices={choices} />
        )}
        <Timer endTime={topic.deadline} />
        <SelectTextContainer>
          <LeftDoubleArrowIcon />
          <Text size={14} weight={'regular'} color={colors.white_40}>
            밀어서 선택하기
          </Text>
          <RightDoubleArrowIcon />
        </SelectTextContainer>
        <CommentBox
          side={topic.keyword.topicSide === 'TOPIC_A' ? 'A' : 'B'}
          hasVoted={hasVoted}
          commentCount={0}
          voteCount={0}
          keyword={'키워드'}
          topComment={'top comment here!'}
          onClick={handleOnClickCommentBox}
        />
      </TopicCardContainer>
      <CommentSheet>
        <TopicComments topic={topic} />
      </CommentSheet>
    </React.Fragment>
  );
};

export default TopicCard;
