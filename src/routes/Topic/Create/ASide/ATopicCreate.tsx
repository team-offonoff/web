import React, { useState, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useCreateTopics } from '@apis/topic/useTopics';
import DefaultButton from '@components/commons/Button/DefaultButton';
import TopicCreateButton from '@components/commons/Button/TopicCreateButton';
import { Col } from '@components/commons/Flex/Flex';
import Text from '@components/commons/Text/Text';
import TextInput from '@components/commons/TextInput/TextInput';
import { theme3 } from '@components/commons/TextInput/theme';
import TopicCreateTextInput from '@components/TopicCreate/TopicCreateTextInput';
import { CHOICE_OPTIONS } from '@interfaces/api/topic';
import { TopicCreateDTO } from '@routes/Topic/Create/TopicCreate';

import { INPUT_TYPE, CONFIG } from '@constants/form';

import { colors } from '@styles/theme';

import { Container, SubmitButton } from './ATopicCreate.styles';

const ATopicCreate = () => {
  const navigate = useNavigate();
  const methods = useForm<TopicCreateDTO>({ mode: 'onChange' });

  const titleProgress = methods.watch(INPUT_TYPE.TOPIC_TITLE)
    ? `${Array.from(methods.watch(INPUT_TYPE.TOPIC_TITLE)).length}/20`
    : '0/20';
  const [isFormFilled, setIsFormFilled] = useState(false);

  const createTopicMutation = useCreateTopics();

  const handleSubmitForm = async () => {
    const data = methods.getValues();
    try {
      const res = await createTopicMutation.mutateAsync({
        side: 'TOPIC_A',
        title: data.topicTitle,
        keywordName: null,
        deadline: null,
        choices: [
          {
            choiceContentRequest: {
              text: data.ATopic,
              type: 'IMAGE_TEXT',
              imageUrl: null,
            },
            choiceOption: CHOICE_OPTIONS.CHOICE_A,
          },
          {
            choiceContentRequest: {
              text: data.BTopic,
              type: 'IMAGE_TEXT',
              imageUrl: null,
            },
            choiceOption: CHOICE_OPTIONS.CHOICE_B,
          },
        ],
      });
      navigate(`/topics/a`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const ATopicCondition = methods.getFieldState(INPUT_TYPE.A_TOPIC, methods.formState);
    const BTopicCondition = methods.getFieldState(INPUT_TYPE.B_TOPIC, methods.formState);
    if (
      !ATopicCondition.invalid &&
      !BTopicCondition.invalid &&
      ATopicCondition.isDirty &&
      BTopicCondition.isDirty
    ) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [methods.formState, methods]);

  return (
    <FormProvider {...methods}>
      <Container>
        <Col gap={63}>
          <Col gap={20}>
            <Text size={16} weight={400} color={colors.white_60} align="start">
              어떤 주제로 물어볼까요?
            </Text>
            <TextInput
              id={INPUT_TYPE.TOPIC_TITLE}
              maxLength={20}
              options={CONFIG.TOPIC_TITLE.options}
              placeholder={'제목을 입력해주세요.'}
              theme={theme3}
              right={() => (
                <Text size={15} weight={400} color={colors.purple_60}>
                  {titleProgress}
                </Text>
              )}
            />
          </Col>
          <TopicCreateTextInput />
        </Col>
        <SubmitButton>
          <TopicCreateButton
            title={isFormFilled ? '토픽 던지기' : '내용을 입력해 주세요'}
            onClick={handleSubmitForm}
            disabled={!isFormFilled}
            topicType="A"
          />
        </SubmitButton>
      </Container>
    </FormProvider>
  );
};

export default ATopicCreate;
