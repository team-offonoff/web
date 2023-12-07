import React, { useState } from 'react';

import BottomSheet from '@components/commons/BottomSheet/BottomSheet';
import Text from '@components/commons/Text/Text';
import ChoiceSlider from '@components/Home/ChoiceSlider/ChoiceSlider';
import CommentBox from '@components/Home/CommentBox/CommentBox';
import Timer from '@components/Home/Timer/Timer';
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
  const [isCommentOpen, setIsCommentOpen] = useState(false);

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

  const handleOnClickCommentBox = () => {
    if (hasVoted) {
      setIsCommentOpen(true);
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
          side={'A'}
          hasVoted={hasVoted}
          commentCount={0}
          voteCount={0}
          keyword={'키워드'}
          topComment={'top comment here!'}
          onClick={handleOnClickCommentBox}
        />
      </TopicCardContainer>
      <BottomSheet open={isCommentOpen} setIsOpen={setIsCommentOpen}>
        <div style={{ height: 400, backgroundColor: 'white' }}>hi</div>
      </BottomSheet>
    </React.Fragment>
  );
};

export default TopicCard;
