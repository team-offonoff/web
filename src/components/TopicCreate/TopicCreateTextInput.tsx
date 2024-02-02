import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CONFIG, INPUT_TYPE } from 'src/constants/form';

import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';

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

interface TopicCreareProps {
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TopicCreateTextInput = ({ onKeyDown }: TopicCreareProps) => {
  const { register, watch } = useFormContext();
  const ATopicProgress = watch(INPUT_TYPE.A_TOPIC)
    ? `${watch(INPUT_TYPE.A_TOPIC)?.length}/25`
    : '0/25';
  const BTopicProgress = watch(INPUT_TYPE.B_TOPIC)
    ? `${watch(INPUT_TYPE.B_TOPIC)?.length}/25`
    : '0/25';
  return (
    <Col gap={16}>
      <Row justifyContent="space-between">
        <Text size={16} weight={400} color={colors.white_60} align="start">
          어떤 선택지가 있나요?
        </Text>
        <ReplaceButton>
          <ReplaceIcon>
            <RotateIcon opacity="0.3" />
          </ReplaceIcon>
          <Text size={13} weight={400} color={colors.purple_30} align="start">
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
