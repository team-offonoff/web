import React from 'react';
import { useNavigate } from 'react-router';

import Text from '@components/Text/Text';

import { NextIcon } from '@icons/index';

import useTimer from '@hooks/useTimer';

import {
  BestTopicCotainer,
  TopicContainer,
  NavigateButton,
  Topic,
  SkipButtonContainer,
  SkipButton,
  TimerContainer,
  Timer,
  SelectContainer,
  UserInfoContainer,
  UserProfileImage,
} from './TopicCard.styles';

const TopicCard = () => {
  const futureTime = 1696431600000 + 1000 * 60 * 60 * 24 * 16 + 1000 * 60 * 60 * 18;
  const profileName = '체리체리체리체리';
  const topic = '10년전 또는 후로 갈 수 있다면?';

  const navigate = useNavigate();
  const timer = useTimer({
    endTime: futureTime,
  });

  const handleNextButton = () => {
    /*다음토픽으로 이동*/
  };

  const handleSkipButton = () => {
    /*현재토픽 skip 후 다음토픽 으로 이동*/
    navigate('/login');
  };

  return (
    <React.Fragment>
      <BestTopicCotainer>
        <Text size={20} color="#a46ff3">
          실시간 인기토픽
        </Text>
      </BestTopicCotainer>
      <TopicContainer>
        <NavigateButton>
          <NextIcon style={{ transform: 'rotate(180deg)' }} />
        </NavigateButton>
        <Topic>{topic}</Topic>
        <NavigateButton onClick={handleNextButton}>
          <NextIcon />
        </NavigateButton>
      </TopicContainer>
      <SkipButtonContainer>
        <SkipButton onClick={handleSkipButton}>이런 토픽은 안볼래요</SkipButton>
      </SkipButtonContainer>
      <TimerContainer>
        <Timer isLessThanOneHour={timer.isLessThanOneHour}>{timer.displayTime}</Timer>
      </TimerContainer>
      <SelectContainer></SelectContainer>
      <UserInfoContainer>
        <UserProfileImage></UserProfileImage>
        <Text size={18}>
          <b>{profileName}</b> 님의 토픽
        </Text>
      </UserInfoContainer>
    </React.Fragment>
  );
};

export default TopicCard;
