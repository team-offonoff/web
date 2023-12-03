import React from 'react';
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';

import ChoiceSlide from '@components/ChoiceSlide/ChoiceSlide';
import CommentBox from '@components/CommentBox/CommentBox';
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
} from './TopicCard.styles';

const TopicCard = () => {
  const [hasVoted, setHasVoted] = useState(false);

  const profileName = '닉네임닉네임';
  const topic = '10년전 또는 후로 갈 수 있다면?';
  const endTime = new Date();
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
      <SelectContainer
        drag="x"
        dragElastic={0}
        dragConstraints={{
          left: -800,
          right: 400,
        }}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 40 }}
      >
        <ChoiceSlide side={'A'} />
        <ChoiceSlide side={'B'} />
      </SelectContainer>
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
