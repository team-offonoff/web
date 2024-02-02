import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { CONFIG, INPUT_TYPE } from 'src/constants/form';
import { TOPIC_DEADLINES } from 'src/constants/topic';

import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import TopicCreateImageInput from '@components/TopicCreate/TopicCreateImageInput';
import TopicCreateTextInput from '@components/TopicCreate/TopicCreateTextInput';

import { colors } from '@styles/theme';

import {
  BigDownChevronIcon,
  ImageIcon,
  SelectedImageIcon,
  SelectedTextIcon,
  TextIcon,
} from '@icons/index';

import {
  Container,
  DeadlineInput,
  DeadlineInputButton,
  DeadlineInputContainer,
  SelectIconContainer,
  UnderLine,
} from './BTopicCreateStep2.styles';

interface BTopicCreateStep2Props {
  topicTitle: string;
  topicCategory: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const BTopicCreateStep2 = ({ topicTitle, topicCategory }: BTopicCreateStep2Props) => {
  const { register, setValue } = useFormContext();

  const [selected, setSelected] = useState<string>('text');

  const [selectedDeadline, setSelectedDeadline] = useState<string>('1시간 뒤');

  const Selection = selected === 'text' ? <TopicCreateTextInput /> : <TopicCreateImageInput />;

  const {
    ref: deadlineInputRef,
    onChange: deadlinInputOnChange,
    ...rest
  } = register(INPUT_TYPE.TOPIC_DEADLINE, CONFIG.TOPIC_DEADLINE.options);

  const handleTextSelect = () => {
    setSelected('text');
  };

  const handleImageSelect = () => {
    setSelected('image');
  };

  const handleDeadlineInputClick = () => {
    const inputElement = document.getElementById(INPUT_TYPE.TOPIC_DEADLINE);
    if (inputElement) {
      inputElement.click();
      console.log('click');
    }
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    deadlinInputOnChange(e);
    setValue(INPUT_TYPE.TOPIC_DEADLINE, e.target.value);
    setSelectedDeadline(
      `${TOPIC_DEADLINES.find((option) => option.value.toString() === e.target.value)?.label} 뒤`
    );
    console.log(selectedDeadline);
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
        <Row gap={4} justifyContent="flex-start" alignItems="center">
          <DeadlineInputContainer onClick={handleDeadlineInputClick}>
            <DeadlineInputButton>
              <BigDownChevronIcon stroke={colors.purple} />
            </DeadlineInputButton>
            <Text size={15} weight={500} color={colors.purple}>
              {selectedDeadline}
            </Text>
            <DeadlineInput
              id={INPUT_TYPE.TOPIC_DEADLINE}
              ref={deadlineInputRef}
              onChange={(e) => handleDeadlineChange(e)}
              {...rest}
            >
              {TOPIC_DEADLINES.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </DeadlineInput>
          </DeadlineInputContainer>
          <Text size={15} weight={400} color={colors.white_60}>
            에 토픽을 마감해요
          </Text>
        </Row>
      </Col>
    </Container>
  );
};

export default BTopicCreateStep2;
