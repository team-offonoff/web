import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';

import { INPUT_TYPE, CONFIG } from '@constants/form';

import { colors } from '@styles/theme';

import { RotateIcon } from '@icons/index';

import {
  Input,
  ReplaceButton,
  ReplaceIcon,
  TextInputContainer,
  TextInputTextContainer,
  InputSuffix,
} from './TopicCreateTextInput.styles';

const TopicCreateTextInput = () => {
  const { register, watch, getFieldState, formState, setValue } = useFormContext();
  const ATopicProgress = watch(INPUT_TYPE.A_TOPIC)
    ? `${watch(INPUT_TYPE.A_TOPIC)?.length}/25`
    : '0/25';
  const BTopicProgress = watch(INPUT_TYPE.B_TOPIC)
    ? `${watch(INPUT_TYPE.B_TOPIC)?.length}/25`
    : '0/25';

  const [isTopicFilled, setIsTopicFilled] = useState(false);

  const handleReplaceButtonClick = () => {
    const aTopic = watch(INPUT_TYPE.A_TOPIC);
    const bTopic = watch(INPUT_TYPE.B_TOPIC);

    setValue(INPUT_TYPE.A_TOPIC, bTopic);
    setValue(INPUT_TYPE.B_TOPIC, aTopic);
  };

  useEffect(() => {
    const ATopicCondition = getFieldState(INPUT_TYPE.A_TOPIC, formState);
    const BTopicCondition = getFieldState(INPUT_TYPE.B_TOPIC, formState);
    if (
      !ATopicCondition.invalid &&
      ATopicCondition.isDirty &&
      !BTopicCondition.invalid &&
      BTopicCondition.isDirty
    ) {
      setIsTopicFilled(true);
    } else {
      setIsTopicFilled(false);
    }
  }, [formState, getFieldState]);

  return (
    <Col gap={16}>
      <Row justifyContent="space-between">
        <Text size={16} weight={400} color={colors.white_60} align="start">
          어떤 선택지가 있나요?
        </Text>
        <ReplaceButton disabled={!isTopicFilled} onClick={handleReplaceButtonClick}>
          <ReplaceIcon>
            <RotateIcon opacity={isTopicFilled ? '1' : '0.3'} />
          </ReplaceIcon>
          <Text
            size={13}
            weight={400}
            color={isTopicFilled ? colors.purple : colors.purple_30}
            align="start"
          >
            AB 선택지 바꾸기
          </Text>
        </ReplaceButton>
      </Row>
      <Col gap={8}>
        <TextInputContainer>
          <TextInputTextContainer>
            <Text size={128} weight={900} color={colors.A_20}>
              A
            </Text>
          </TextInputTextContainer>
          <Input
            maxLength={25}
            type="text"
            autoComplete="off"
            {...register(INPUT_TYPE.A_TOPIC, CONFIG.A_TOPIC.options)}
            placeholder="A 선택지를 입력해주세요."
          />
          <InputSuffix>
            <Text size={15} weight={400} color={colors.purple_60}>
              {ATopicProgress}
            </Text>
          </InputSuffix>
        </TextInputContainer>
        <TextInputContainer>
          <TextInputTextContainer>
            <Text size={128} weight={900} color={colors.B_20}>
              B
            </Text>
          </TextInputTextContainer>
          <Input
            maxLength={25}
            type="text"
            autoComplete="off"
            {...register(INPUT_TYPE.B_TOPIC, CONFIG.B_TOPIC.options)}
            placeholder="B 선택지를 입력해주세요."
          />
          <InputSuffix>
            <Text size={15} weight={400} color={colors.purple_60}>
              {BTopicProgress}
            </Text>
          </InputSuffix>
        </TextInputContainer>
      </Col>
    </Col>
  );
};

export default TopicCreateTextInput;
