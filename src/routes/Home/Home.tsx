import React, { useState } from 'react';

import {
  BestTopicCotainer,
  BestTopicTitle,
  Container,
  NavigateButton,
  TimerContainer,
  Timer,
  Topic,
  TopicContainer,
  SkipButton,
  SkipButtonContainer,
  SelectContainer,
  UserInfoContainer,
  UserProfileImage,
  UserProfileName,
} from './Home.styles';

import { NextIcon } from '@icons/index';
import useTimer from '@hooks/useTimer';

const Home = () => {
  const profileName = '체리체리체리체리';

  const topic = '10년전 또는 후로 갈 수 있다면?';

  const handleNextButton = () => {
    /*다음토픽으로 이동*/
  };

  const handleSkipButton = () => {
    /*현재토픽 skip 후 다음토픽 으로 이동*/
  };

  /* 서버에서 주는 만료시간 예) '1696431600000' -> 10월 5일 자정
  timer.isFinished 변수를 이용하면 타이머 종료 이벤트에 활용 할 수 있음*/

  const futureTime = 1696431600000 + 1000 * 60 * 60 * 18;
  const timer = useTimer({
    endTime: futureTime,
  });

  return (
    <Container>
      <BestTopicCotainer>
        <BestTopicTitle>실시간 인기토픽</BestTopicTitle>
      </BestTopicCotainer>
      <TopicContainer>
        <NavigateButton></NavigateButton>
        <Topic>{topic}</Topic>
        <NavigateButton onClick={handleNextButton}>
          <NextIcon />
        </NavigateButton>
      </TopicContainer>
      <SkipButtonContainer>
        <SkipButton onClick={handleSkipButton}>이런 토픽은 안볼래요</SkipButton>
      </SkipButtonContainer>
      <TimerContainer>
        <Timer
          style={{
            color: timer.isOneHour ? '#3C3457' : 'rgb(255 255 255 / 40%)',
            backgroundColor: timer.isOneHour ? '#A46FF3' : '#3c3457',
          }}
        >
          {timer.timeString}
        </Timer>
      </TimerContainer>
      <SelectContainer></SelectContainer>
      <UserInfoContainer>
        <UserProfileImage></UserProfileImage>
        <UserProfileName>
          <b>{profileName}</b> 님의 토픽
        </UserProfileName>
      </UserInfoContainer>
    </Container>
  );
};

export default Home;
