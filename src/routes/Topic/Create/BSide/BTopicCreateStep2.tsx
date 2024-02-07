import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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

const BTopicCreateStep2 = () => {
  const navigate = useNavigate();
  const { register, setValue, getValues } = useFormContext();

  register(INPUT_TYPE.TOPIC_CONTENT_TYPE, CONFIG.TOPIC_CONTENT_TYPE.options);

  const topicTitle = getValues(INPUT_TYPE.TOPIC_TITLE);
  const topicCategory = getValues(INPUT_TYPE.TOPIC_CATEGORY);

  const [selected, setSelected] = useState<string>('text');

  const [selectedDeadline, setSelectedDeadline] = useState<string>('1시간 뒤');

  const Selection = selected === 'text' ? <TopicCreateTextInput /> : <TopicCreateImageInput />;

  const { onChange: deadlinInputOnChange, ...rest } = register(
    INPUT_TYPE.TOPIC_DEADLINE,
    CONFIG.TOPIC_DEADLINE.options
  );

  const handleTextSelect = () => {
    setValue(INPUT_TYPE.TOPIC_CONTENT_TYPE, 'text');
    setSelected('text');
  };

  const handleImageSelect = () => {
    setValue(INPUT_TYPE.TOPIC_CONTENT_TYPE, 'image');
    setSelected('image');
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    deadlinInputOnChange(e);
    setValue(INPUT_TYPE.TOPIC_DEADLINE, e.target.value);
    setSelectedDeadline(`${e.target.value}시간 뒤`);
  };

  useEffect(() => {
    if (!topicTitle || !topicCategory) {
      navigate(-1);
    }
  }, [topicTitle, topicCategory]);

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
          <DeadlineInputContainer>
            <DeadlineInputButton>
              <BigDownChevronIcon stroke={colors.purple} />
            </DeadlineInputButton>
            <Text size={15} weight={500} color={colors.purple}>
              {selectedDeadline}
            </Text>
            <DeadlineInput
              id={INPUT_TYPE.TOPIC_DEADLINE}
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
