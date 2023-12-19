import React from 'react';

import Text from '@components/commons/Text/Text';
import { ChoiceContent } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { AlphaSideContainer, BetaSideContainer } from './ChoiceSlide.styles';

interface ChoiceSlideProps {
  side: 'A' | 'B';
  topicContent: ChoiceContent;
}

const ChoiceSlide = ({ side, topicContent }: ChoiceSlideProps) => {
  if (side === 'A') {
    return (
      <AlphaSideContainer>
        <div
          style={{
            position: 'absolute',
            top: -45,
            right: 95,
          }}
        >
          <Text color={'rgba(255, 255, 255, 0.4)'} size={200} weight={900}>
            A
          </Text>
        </div>
        <Text color={colors.white} size={20} weight={600}>
          {topicContent.text}
        </Text>
      </AlphaSideContainer>
    );
  }
  return (
    <BetaSideContainer>
      <Text color={colors.white} size={20} weight={600} align={'center'}>
        {topicContent.text}
      </Text>
      <div
        style={{
          position: 'absolute',
          top: -45,
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
