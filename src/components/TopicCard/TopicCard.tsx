import { PanInfo, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import ChoiceSlide from '@components/ChoiceSlide/ChoiceSlide';
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
  const containerRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const navigate = useNavigate();
  const [containerWidth, setContainerWidth] = useState(0);
  const [hasSlided, setHasSlided] = useState(false);

  const profileName = '체리체리체리체리';
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
    } else if (info.velocity.x > 0 && info.offset.x > containerWidth / 2 + 7.5) {
      // A 슬라이드
      controls.start('A');
    }
  };

  const handleSkipButton = () => {
    /*현재토픽 skip 후 다음토픽 으로 이동*/
    navigate('/login');
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
      <SkipButtonContainer>
        <SkipButton onClick={handleSkipButton}>이런 토픽은 안볼래요</SkipButton>
      </SkipButtonContainer>
      <Timer endTime={endTime.getTime()} />
      {containerWidth > 0 && (
        <SelectContainer
          animate={controls}
          drag="x"
          initial={{ translateX: `${containerWidth / 2 - 420.5}px` }}
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
