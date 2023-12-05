import { useAnimation, PanInfo, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import ChoiceSlide from '@components/ChoiceSlide/ChoiceSlide';

interface ChoiceSliderProps {}

const getScreenWidth = () => {
  return window.innerWidth > 512 ? 512 : window.innerWidth;
};

const ChoiceSlider = () => {
  const screenWidth = getScreenWidth();

  const controls = useAnimation();

  const variants = {
    A: {
      translateX: screenWidth / 2 + 7.5 + 413,
      opacity: 0,
    },
    B: {
      translateX: -(screenWidth / 2 + 7.5 + 413),
      opacity: 0,
    },
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.velocity.x < 0 && info.offset.x < -(screenWidth / 2 + 7.5)) {
      // B 슬라이드
      controls.start('B');
      //   setHasVoted(true);
    } else if (info.velocity.x > 0 && info.offset.x > screenWidth / 2 + 7.5) {
      // A 슬라이드
      controls.start('A');
      //   setHasVoted(true);
    }
  };

  return (
    <SelectContainer
      animate={controls}
      drag="x"
      onDragEnd={handleDragEnd}
      variants={variants}
      dragSnapToOrigin={true}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      transition={{ ease: 'easeOut' }}
    >
      <ChoiceSlide side={'A'} />
      <ChoiceSlide side={'B'} />
    </SelectContainer>
  );
};

export const SelectContainer = styled(motion.div)`
  position: relative;
  display: flex;
  gap: 15px;
  justify-content: center;
  width: max-content;
  padding: 36px 0;
  margin: 19px 0 7px;
  overflow: hidden;
`;

export default ChoiceSlider;
