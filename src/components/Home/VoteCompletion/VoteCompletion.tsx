import React from 'react';

import Text from '@components/commons/Text/Text';
import { UserProfileImage } from '@components/Home/TopicCard/TopicCard.styles';
import useModal from '@hooks/useModal/useModal';

import { colors } from '@styles/theme';

import { MeatballIcon } from '@icons/index';

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
  const handleOnClickCommentMenu = () => {};

  return (
    <VoteCompletionContainer>
      <VoteCompletionBackground side={side}>
        <div style={{ zIndex: 1 }}>
          <Text color={colors.white} size={20} weight={600}>
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
