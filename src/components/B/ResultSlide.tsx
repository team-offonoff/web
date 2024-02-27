import React from 'react';

import Text from '@components/commons/Text/Text';
import {
  AlphaSideContainer,
  AlphaSizeUpButton,
  BetaSideContainer,
  BetaSizeUpButton,
  SideImage,
  TextContainer,
} from '@components/Home/ChoiceSlide/ChoiceSlide.styles';
import { ChoiceContent, TopicResponse } from '@interfaces/api/topic';

import { colors } from '@styles/theme';

import { SizeUpIcon } from '@icons/index';

interface Props {
  topicSide: TopicResponse['topicSide'];
  choiceContent: ChoiceContent;
}

const ResultSlide = ({ topicSide, choiceContent }: Props) => {
  const SlideContainer = topicSide === 'TOPIC_A' ? AlphaSideContainer : BetaSideContainer;
  const SizeUpButton = topicSide === 'TOPIC_A' ? AlphaSizeUpButton : BetaSizeUpButton;

  return (
    <SlideContainer>
      <div
        style={{
          position: 'absolute',
          top: -45,
          right: topicSide === 'TOPIC_A' ? 95 : 'unset',
          left: topicSide === 'TOPIC_A' ? 107 : 'unset',
        }}
      >
        <Text color={topicSide === 'TOPIC_A' ? '#e15ba1' : '#19b1be'} size={200} weight={900}>
          {topicSide === 'TOPIC_A' ? 'A' : 'B'}
        </Text>
      </div>
      {choiceContent.imageUrl ? (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: topicSide === 'TOPIC_A' ? 'flex-end' : 'flex-start',
          }}
        >
          <SideImage />
        </div>
      ) : (
        <TextContainer>
          <Text
            style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
            color={colors.white}
            size={choiceContent.text && choiceContent.text.length >= 21 ? 16 : 20}
            weight={600}
            align="center"
          >
            {choiceContent.text}
          </Text>
        </TextContainer>
      )}
    </SlideContainer>
  );
};

export default ResultSlide;
