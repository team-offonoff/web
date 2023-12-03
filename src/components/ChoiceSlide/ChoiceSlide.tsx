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
        <Text color={colors.white} size={28} weight={600}>
          10년 전 <br />
          과거로 가기
        </Text>
      </AlphaSideContainer>
    );
  }
  return (
    <BetaSideContainer>
      <Text color={colors.white} size={28} weight={600} align={'center'}>
        10년 전 <br />
        과거로 가기
      </Text>
    </BetaSideContainer>
  );
};

export default ChoiceSlide;
