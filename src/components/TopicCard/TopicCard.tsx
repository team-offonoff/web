import { PanInfo, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import ChoiceSlide from '@components/ChoiceSlide/ChoiceSlide';
import ChoiceSlider from '@components/ChoiceSlider/ChoiceSlider';
import CommentBox from '@components/CommentBox/CommentBox';
import Text from '@components/Text/Text';
import Timer from '@components/Timer/Timer';
import { TopicResponse } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { LeftDoubleArrowIcon, RightDoubleArrowIcon } from '@icons/index';

import {
  BestTopicCotainer,
  TopicContainer,
  Topic,
  UserInfoContainer,
  UserProfileImage,
  TopicCardContainer,
  SelectTextContainer,
} from './TopicCard.styles';

const TopicCard = () => {
  const [hasVoted, setHasVoted] = useState(false);

  const data: TopicResponse = {
    topicId: 1,
    topicSide: 'left',
    topicTitle: 'Example Topic',
    deadline: null,
    voteCount: 10,
    topicContent: 'topicContent',
    keywords: [
      {
        keywordId: 1,
        keywordName: 'keyword1',
        topicSide: 'left',
      },
      {
        keywordId: 2,
        keywordName: 'keyword2',
        topicSide: 'right',
      },
    ],
    choices: [
      {
        choiceId: 1,
        content: {
          text: 'Choice 1',
          imageUrl: 'https://example.com/image1.jpg',
          type: 'image',
        },
        choiceOption: 'A',
      },
      {
        choiceId: 2,
        content: {
          text: 'Choice 2',
          imageUrl: undefined,
          type: 'text',
        },
        choiceOption: 'B',
      },
    ],
    author: 'jinhoda',
  };

  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 4);

  const handleOnVote = (choiceId: number) => {
    setHasVoted(true);
  };

  return (
    <TopicCardContainer>
      <BestTopicCotainer>
        <Text size={18} color={colors.purple}>
          실시간 인기 토픽
        </Text>
      </BestTopicCotainer>
      <TopicContainer>
        <Topic>{data.topicTitle}</Topic>
      </TopicContainer>
      <UserInfoContainer>
        <UserProfileImage></UserProfileImage>
        <Text size={14} weight={'regular'} color={colors.white_60}>
          {data.author}
        </Text>
      </UserInfoContainer>
      {hasVoted ? (
        <div>선택 완료</div> // TODO: 선택 완료 컴포넌트
      ) : (
        <ChoiceSlider onVote={handleOnVote} choices={data.choices} />
      )}
      <Timer endTime={endTime.getTime()} />
      <SelectTextContainer>
        <LeftDoubleArrowIcon />
        <Text size={14} weight={'regular'} color={colors.white_40}>
          밀어서 선택하기
        </Text>
        <RightDoubleArrowIcon />
      </SelectTextContainer>
      <CommentBox
        hasVoted={hasVoted}
        side={'A'}
        keyword={'키워드'}
        commentCount={0}
        voteCount={0}
        topComment={'top comment here!'}
      />
    </TopicCardContainer>
  );
};

export default TopicCard;
