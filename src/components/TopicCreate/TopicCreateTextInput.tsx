import { Register } from '@tanstack/react-query';
import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { CONFIG, INPUT_TYPE, InputType } from 'src/constants/form';

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
  const ATopicProgress = watch(INPUT_TYPE.ATOPIC)
    ? `${watch(INPUT_TYPE.ATOPIC)?.length}/25`
    : '0/25';
  const BTopicProgress = watch(INPUT_TYPE.BTOPIC)
    ? `${watch(INPUT_TYPE.BTOPIC)?.length}/25`
    : '0/25';
  return (
    <Col gap={16}>
      <Row gap={83} justifyContent="space-between">
        <Text size={16} weight={400} color={colors.white_60} align="start">
          어떤 선택지가 있나요?
        </Text>
        <ReplaceButton>
          <ReplaceIcon>
            <RotateIcon opacity="0.3" />
          </ReplaceIcon>
          <Text style={{ opacity: 0.3 }} size={13} weight={400} color={colors.purple} align="start">
            AB 선택지 바꾸기
          </Text>
        </ReplaceButton>
      </Row>
      <Col gap={8}>
        <TextInputContainer>
          <TextInputTextContainer>
            <Text style={{ opacity: 0.2 }} size={128} weight={900} color={colors.A}>
              A
            </Text>
          </TextInputTextContainer>
          <Input
            type="text"
            {...register(INPUT_TYPE.ATOPIC, CONFIG.ATOPIC.options)}
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
            <Text style={{ opacity: 0.2 }} size={128} weight={900} color={colors.B}>
              B
            </Text>
          </TextInputTextContainer>
          <Input
            type="text"
            {...register(INPUT_TYPE.BTOPIC, CONFIG.BTOPIC.options)}
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
