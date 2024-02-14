import React from 'react';

import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import {
  VoteCompletionContainer,
  VoteCompletionBackground,
  VoteCompletionLabel,
  VoteCompletionTextContainer,
} from './VoteCompletion.styles';

interface VoteCompletionProps {
  side: 'A' | 'B';
  topicContent: string;
}

const VoteCompletion = ({ side, topicContent }: VoteCompletionProps) => {
  return (
    <VoteCompletionContainer>
      <VoteCompletionBackground side={side}>
        <div style={{ zIndex: 1, padding: 20, wordBreak: 'break-word' }}>
          <Text
            color={colors.white}
            size={topicContent.length >= 21 ? 16 : 20}
            weight={600}
            align="center"
          >
            {topicContent}
          </Text>
        </div>

        <VoteCompletionTextContainer>
          <Text
            color={side === 'A' ? 'rgba(208, 67, 118, 0.40)' : 'rgba(20, 152, 170, 0.40)'}
            size={200}
            weight={900}
          >
            {side}
          </Text>
        </VoteCompletionTextContainer>
      </VoteCompletionBackground>
      <VoteCompletionLabel>선택 완료</VoteCompletionLabel>
    </VoteCompletionContainer>
  );
};

export default VoteCompletion;
