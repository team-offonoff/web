import React from 'react';
import {
  BestTopicCotainer,
  BestTopicTitle,
  Container,
  NavigateButton,
  TimerContainer,
  Timer,
  Topic,
  TopicContainer,
  UnderlineTextButton,
  UnderlineTextButtonContainer,
  SelectContainer,
  UserInfoContainer,
  UserProfileImage,
  UserProfileName,
} from './Home.styles';
import { NextIcon } from '../../assets/icons';

const Home = () => {
  return (
    <Container>
      <BestTopicCotainer>
        <BestTopicTitle>실시간 인기토픽</BestTopicTitle>
      </BestTopicCotainer>
      <TopicContainer>
        <NavigateButton></NavigateButton>
        <Topic>10년전 또는 후로 갈 수 있다면?</Topic>
        <NavigateButton>
          <NextIcon />
        </NavigateButton>
      </TopicContainer>
      <UnderlineTextButtonContainer>
        <UnderlineTextButton>이런 토픽은 안볼래요</UnderlineTextButton>
      </UnderlineTextButtonContainer>
      <TimerContainer>
        <Timer>01 : 00 : 00</Timer>
      </TimerContainer>
      <SelectContainer></SelectContainer>
      <UserInfoContainer>
        <UserProfileImage></UserProfileImage>
        <UserProfileName>
          <b>체리체리체리체리체리체리</b> 님의 토픽
        </UserProfileName>
      </UserInfoContainer>
    </Container>
  );
};

export default Home;
