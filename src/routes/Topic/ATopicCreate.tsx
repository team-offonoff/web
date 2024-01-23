import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CONFIG, INPUT_TYPE } from 'src/constants/form';

import DefaultButton from '@components/commons/Button/DefaultButton';
import { Col, Row } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import TextInput from '@components/commons/TextInput/TextInput';
import TopicCreateTextInput from '@components/TopicCreate/TopicCreateTextInput';

import { colors } from '@styles/theme';

import { Container, SubmitButton } from './ATopicCreate.styles';

interface TopicCreateDTO {
  topicTitle: string;
  ATopic: string;
  BTopic: string;
}

const ATopicCreate = () => {
  const methods = useForm<TopicCreateDTO>({ mode: 'onChange' });

  const titleProgress = methods.watch(INPUT_TYPE.TOPICTITLE)
    ? `${methods.watch(INPUT_TYPE.TOPICTITLE)?.length}/20`
    : '0/20';

  const handleSummitButtonClick = () => {
    console.log('summit');
  };

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
          <TopicCreateTextInput topic="A" topicContent="A 토픽" />
        </Col>
        <SubmitButton>
          <DefaultButton
            title={'토픽 던지기'}
            onClick={handleSummitButtonClick}
            disabled={false}
          ></DefaultButton>
        </SubmitButton>
      </Container>
    </FormProvider>
  );
};

export default ATopicCreate;
