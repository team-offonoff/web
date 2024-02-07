import { useAnimation, PanInfo, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import ChoiceSlide from '@components/Home/ChoiceSlide/ChoiceSlide';
import { Choice } from '@interfaces/api/topic';

import { getScreenWidth } from '@utils/screenWidth';

interface ChoiceSliderProps {
  onVote: (choiceOption: Choice['choiceOption']) => void;
  choices: Choice[];
}

const ChoiceSlider = ({ onVote, choices }: ChoiceSliderProps) => {
  const screenWidth = getScreenWidth();

  const controls = useAnimation();

  const [A, B] = choices;

  const variants = {
    A: {
      translateX: screenWidth / 2 + 7.5 + screenWidth,
      opacity: 0,
    },
    B: {
      translateX: -(screenWidth / 2 + 7.5 + screenWidth),
      opacity: 0,
    },
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.velocity.x > 0 && info.offset.x > screenWidth / 2 + 7.5) {
      // A 슬라이드
      controls.start('A');
      onVote(choices[0].choiceOption);
    } else if (info.velocity.x < 0 && info.offset.x < -(screenWidth / 2 + 7.5)) {
      // B 슬라이드
      controls.start('B');
      onVote(choices[1].choiceOption);
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
      <ChoiceSlide side={'A'} topicContent={A.content} />
      <ChoiceSlide side={'B'} topicContent={B.content} />
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
