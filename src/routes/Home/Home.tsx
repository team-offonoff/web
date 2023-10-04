<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';

import { NextIcon } from '../../assets/icons';

>>>>>>> dev
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
<<<<<<< HEAD
import { startTimer } from '../../hooks/Timer';
import { NextIcon } from '../../assets/icons';
=======
>>>>>>> dev

const Home = () => {
  const profileName = '체리체리체리체리';

  const topic = '10년전 또는 후로 갈 수 있다면?';

  const [timer, setTimer] = useState('24 : 00 : 00');
  const handleNextButton = () => {
    /*다음토픽으로 이동*/
  };

  const handleSkipButton = () => {
    /*현재토픽 skip 후 다음토픽 으로 이동*/
  };

  const someServerTime = '1696431600000';

  startTimer(Number(someServerTime), (timeString) => {
    console.log('타이머', timeString);
    setTimer(timeString);
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
        <Timer>{timer}</Timer>
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
