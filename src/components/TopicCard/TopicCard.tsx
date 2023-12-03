import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import Text from '@components/Text/Text';
import Timer from '@components/Timer/Timer';

import { colors } from '@styles/theme';

import { LeftDoubleArrowIcon, MeatballIcon, RightDoubleArrowIcon } from '@icons/index';

import {
  BestTopicCotainer,
  TopicContainer,
  Topic,
  SelectContainer,
  UserInfoContainer,
  UserProfileImage,
  TopicCardContainer,
  SelectTextContainer,
  CommentContainer,
  CommentHeader,
  KeywordContainer,
  CommentInfoContainer,
  Comment,
  HighlightText,
  Blur,
  CommentButton,
} from './TopicCard.styles';

const TopicCard = () => {
  const profileName = '닉네임닉네임';
  const topic = '10년전 또는 후로 갈 수 있다면?';
  const endTime = new Date();
  const [isVote, SetIsVote] = useState(false);
  endTime.setHours(endTime.getHours() + 4);

  const navigate = useNavigate();

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
      <UserInfoContainer>
        <UserProfileImage></UserProfileImage>
        <Text size={14} weight={'regular'} color={colors.white_60}>
          {profileName}
        </Text>
      </UserInfoContainer>
      <SelectContainer></SelectContainer>
      <Timer endTime={endTime.getTime()} />
      <SelectTextContainer>
        <LeftDoubleArrowIcon />
        <Text size={14} weight={'regular'} color={colors.white_40}>
          밀어서 선택하기
        </Text>
        <RightDoubleArrowIcon />
      </SelectTextContainer>
      <CommentContainer>
        <CommentHeader>
          <KeywordContainer>
            <Text size={13} weight={'regular'} color={colors.purple}>
              A 사이드
            </Text>
            <Text size={14} weight={'regular'} color={colors.white_20}>
              |
            </Text>
            <Text size={13} weight={'regular'} color={colors.white_60}>
              대표키워드요
            </Text>
          </KeywordContainer>
          <MeatballIcon />
        </CommentHeader>
        <CommentInfoContainer>
          <Text size={14} weight={600} color={colors.white_60}>
            <HighlightText>1천개</HighlightText>의 댓글
          </Text>
          <Text size={14} weight={600} color={colors.white_60}>
            <HighlightText>1.2천명</HighlightText>이 선택했어요
          </Text>
        </CommentInfoContainer>
        <Comment>
          <Blur isVote={isVote}>
            <UserProfileImage />
            <Text size={15} weight={'regular'} color={colors.white}>
              나는 10년 전 과거로 가서 주식...
            </Text>
          </Blur>
          {!isVote && <CommentButton>선택하고 댓글 보기</CommentButton>}
        </Comment>
      </CommentContainer>
    </TopicCardContainer>
  );
};

export default TopicCard;
