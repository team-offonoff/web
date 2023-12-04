import React from 'react';
import { useNavigate } from 'react-router';

import Text from '@components/Text/Text';
import Timer from '@components/Timer/Timer';

import { colors } from '@styles/theme';

import {
  BestTopicCotainer,
  TopicContainer,
  Topic,
  SkipButtonContainer,
  SkipButton,
  SelectContainer,
  UserInfoContainer,
  UserProfileImage,
  TopicCardContainer,
} from './TopicCard.styles';

const TopicCard = () => {
  const profileName = '체리체리체리체리';
  const topic = '10년전 또는 후로 갈 수 있다면?';
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 4);

  const navigate = useNavigate();

  const handleSkipButton = () => {
    /*현재토픽 skip 후 다음토픽 으로 이동*/
    navigate('/login');
  };

  return (
    <TopicCardContainer>
      <BestTopicCotainer>
        <Text size={18} color={colors.purple}>
          실시간 인기 토픽
        </Text>
      </BestTopicCotainer>
      <TopicContainer>
        <Topic>{topic}</Topic>
      </TopicContainer>
      <SkipButtonContainer>
        <SkipButton onClick={handleSkipButton}>이런 토픽은 안볼래요</SkipButton>
      </SkipButtonContainer>
      <Timer endTime={endTime.getTime()} />
      <SelectContainer></SelectContainer>
      <UserInfoContainer>
        <UserProfileImage></UserProfileImage>
        <Text size={18}>
          <b>{profileName}</b> 님의 토픽
        </Text>
      </UserInfoContainer>
    </TopicCardContainer>
  );
};

export default TopicCard;
