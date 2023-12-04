import React from 'react';

import Text from '@components/Text/Text';

import { colors } from '@styles/theme';

import { AlphaSideContainer, BetaSideContainer } from './ChoiceSlide.styles';

interface ChoiceSlideProps {
  side: 'A' | 'B';
}

const ChoiceSlide = ({ side }: ChoiceSlideProps) => {
  if (side === 'A') {
    return (
      <AlphaSideContainer>
        <div
          style={{
            position: 'absolute',
            top: -25,
            right: 95,
          }}
        >
          <Text color={'rgba(255, 255, 255, 0.4)'} size={200} weight={900}>
            A
          </Text>
        </div>
        <Text color={colors.white} size={20} weight={600}>
          10년 전 <br />
          과거로 가기
        </Text>
      </AlphaSideContainer>
    );
  }
  return (
    <BetaSideContainer>
      <Text color={colors.white} size={20} weight={600} align={'center'}>
        10년 전 <br />
        미래로 가기
      </Text>
      <div
        style={{
          position: 'absolute',
          top: -25,
          left: 107,
        }}
      >
        <Text color={'rgba(255, 255, 255, 0.4)'} size={200} weight={900}>
          B
        </Text>
      </div>
    </BetaSideContainer>
  );
};

export default ChoiceSlide;
