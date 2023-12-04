import { PanInfo, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

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
  const containerRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const navigate = useNavigate();
  const [containerWidth, setContainerWidth] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const profileName = '닉네임닉네임';
  const topic = '10년전 또는 후로 갈 수 있다면?';
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 4);
  const variants = {
    A: {
      translateX: 300,
      opacity: 0,
    },
    B: {
      translateX: -800,
      opacity: 0,
    },
  };

  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [containerRef]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.velocity.x < 0 && info.offset.x < -(containerWidth / 2 + 7.5)) {
      // B 슬라이드
      controls.start('B');
      setHasVoted(true);
    } else if (info.velocity.x > 0 && info.offset.x > containerWidth / 2 + 7.5) {
      // A 슬라이드
      controls.start('A');
      setHasVoted(true);
    }
  };

  return (
    <TopicCardContainer ref={containerRef}>
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
      {hasVoted ? (
        <div>선택 완료</div> // TODO: 선택 완료 컴포넌트
      ) : (
        <SelectContainer
          animate={controls}
          drag="x"
          // initial={{ translateX: `${containerWidth / 2 - 420.5}px` }}
          onDragEnd={handleDragEnd}
          variants={variants}
          dragSnapToOrigin={true}
          dragConstraints={
            {
              // left: -(containerWidth / 2 + 7.5), // -(413 + 15 - contain erWidth / 2 - 420.5)
              // right: containerWidth / 2 + 7.5, // 413 + 15 - 236
            }
          }
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
        >
          <ChoiceSlide side={'A'} />
          <ChoiceSlide side={'B'} />
        </SelectContainer>
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
