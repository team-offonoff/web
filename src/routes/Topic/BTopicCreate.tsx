import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CONFIG, INPUT_TYPE } from 'src/constants/form';

import { Col } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import TextInput from '@components/commons/TextInput/TextInput';

import { colors } from '@styles/theme';

import { Container } from './ATopicCreate.styles';

interface TopicCreateDTO {
  topicTitle: string;
  ATopic: string;
  BTopic: string;
}

const BTopicCreate = () => {
  const methods = useForm<TopicCreateDTO>({ mode: 'onChange' });

  const titleProgress = methods.watch(INPUT_TYPE.TOPICTITLE)
    ? `${methods.watch(INPUT_TYPE.TOPICTITLE)?.length}/20`
    : '0/20';

  return (
    <FormProvider {...methods}>
      <Container>
        <Col gap={63}>
          <Col gap={20}>
            <Text size={16} weight={400} color={colors.white_60} align="start">
              어떤 주제로 물어볼까요?
            </Text>
            <TextInput
              id={INPUT_TYPE.TOPICTITLE}
              options={CONFIG.TOPICTITLE.options}
              placeholder={'제목을 입력해주세요.'}
              theme="t2"
              right={() => (
                <Text style={{ opacity: 0.6 }} size={15} weight={400} color={colors.purple}>
                  {titleProgress}
                </Text>
              )}
            />
          </Col>
          <Col gap={16}>
            <Text size={16} weight={400} color={colors.white_60} align="start">
              토픽의 카테고리를 알려주세요
            </Text>
          </Col>
        </Col>
      </Container>
    </FormProvider>
  );
};

export default BTopicCreate;
