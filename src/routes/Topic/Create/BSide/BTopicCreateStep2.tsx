import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import TopicCreateImageInput from '@components/TopicCreate/TopicCreateImageInput';
import TopicCreateTextInput from '@components/TopicCreate/TopicCreateTextInput';

import { colors } from '@styles/theme';

import { ImageIcon, SelectedImageIcon, SelectedTextIcon, TextIcon } from '@icons/index';

import { Container, SelectIconContainer, UnderLine } from './BTopicCreateStep2.styles';

interface BTopicCreateStep2Props {
  topicTitle: string;
  topicCategory: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const BTopicCreateStep2 = ({ topicTitle, topicCategory }: BTopicCreateStep2Props) => {
  const methods = useFormContext();

  const [selected, setSelected] = useState<string>('text');

  const Selection = selected === 'text' ? <TopicCreateTextInput /> : <TopicCreateImageInput />;

  const handleTextSelect = () => {
    setSelected('text');
  };

  const handleImageSelect = () => {
    setSelected('image');
  };

  return (
    <Container>
      <Col gap={30} padding={'0 20px'}>
        <Col gap={10}>
          <Row gap={12}>
            <Text size={14} weight={600} color={colors.white_20}>
              {topicTitle}
            </Text>
            <Text size={14} weight={400} color={colors.white_20}>
              {topicCategory}
            </Text>
          </Row>
          <UnderLine />
        </Col>
        <Col gap={40}>
          <Row gap={6}>
            <SelectIconContainer selected={selected === 'text'} onClick={handleTextSelect}>
              {selected === 'text' ? <SelectedTextIcon /> : <TextIcon />}
            </SelectIconContainer>
            <SelectIconContainer selected={selected === 'image'} onClick={handleImageSelect}>
              {selected === 'image' ? <SelectedImageIcon /> : <ImageIcon />}
            </SelectIconContainer>
          </Row>
          {Selection}
        </Col>
      </Col>
    </Container>
  );
};

export default BTopicCreateStep2;
