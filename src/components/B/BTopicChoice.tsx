import React from 'react';
import styled from 'styled-components';

import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

interface BTopicChoiceProps {
  side: 'CHOICE_A' | 'CHOICE_B';
  content: string;
}

const BTopicChoice = ({ side, content }: BTopicChoiceProps) => {
  return (
    <ChoiceContainer>
      <Text size={13} weight={600} color={colors.white_40} align={'center'}>
        {content}
      </Text>
      <Text
        size={20}
        weight={900}
        color={side === 'CHOICE_A' ? colors.A_60 : colors.B_60}
        style={{ position: 'absolute', top: 0, left: 6 }}
      >
        {side === 'CHOICE_A' ? 'A' : 'B'}
      </Text>
    </ChoiceContainer>
  );
};

const ChoiceContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.navy2};
  border-radius: 10px;
`;

export default BTopicChoice;
