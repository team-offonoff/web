import React, { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

import { useCreateTopics } from '@apis/topic/useTopics';
import DefaultButton from '@components/commons/Button/DefaultButton';
import { CHOICE_OPTIONS, TopicCreateRequestDTO } from '@interfaces/api/topic';
import { TopicCreateDTO } from '@routes/Topic/Create/TopicCreate';

import { INPUT_TYPE } from '@constants/form';

import {
  Container,
  PageController,
  PageControllerContainer,
  PageControllerLine,
  SubmitButton,
} from './BTopicCreate.styles';
import BTopicCreateStep1 from './BTopicCreateStep1';
import BTopicCreateStep2 from './BTopicCreateStep2';

const BTopicCreate = () => {
  const methods = useForm<TopicCreateDTO>({ mode: 'onChange' });
  const contentType = useWatch({
    control: methods.control,
    name: INPUT_TYPE.TOPIC_CONTENT_TYPE,
  });
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step');

  const [isFormFilled, setIsFormFilled] = useState(false);

  const createTopicMutation = useCreateTopics();

  const Step = step === '1' ? <BTopicCreateStep1 /> : <BTopicCreateStep2 />;

  const handleDeadline = (deadline: number) => {
    const date = new Date();
    date.setHours(date.getHours() + deadline);
    return Math.floor(date.getTime() / 1000);
  };

  const handleSubmitForm = async () => {
    const data = methods.getValues();
    try {
      const res = await createTopicMutation.mutateAsync({
        side: 'TOPIC_B',
        title: data.topicTitle,
        keywordName: data.topicCategory,
        deadline: handleDeadline(data.topicDeadline),
        choices: [
          {
            choiceContentRequest: {
              text: contentType === 'text' ? data.ATopic : '',
              type: 'IMAGE_TEXT',
              imageUrl: contentType === 'image' ? data.ATopicImageURL : null,
            },
            choiceOption: CHOICE_OPTIONS.CHOICE_A,
          },
          {
            choiceContentRequest: {
              text: contentType === 'text' ? data.BTopic : null,
              type: 'IMAGE_TEXT',
              imageUrl: contentType === 'image' ? data.BTopicImageURL : null,
            },
            choiceOption: CHOICE_OPTIONS.CHOICE_B,
          },
        ],
      });
      console.log('success :', res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const ATopicCondition = methods.getFieldState(INPUT_TYPE.A_TOPIC, methods.formState);
    const BTopicCondition = methods.getFieldState(INPUT_TYPE.B_TOPIC, methods.formState);
    const ATopiImageURLCondition = methods.getFieldState(
      INPUT_TYPE.A_TOPIC_IMAGEURL,
      methods.formState
    );
    const BTopicImageURLCondition = methods.getFieldState(
      INPUT_TYPE.B_TOPIC_IMAGEURL,
      methods.formState
    );
    if (step === '2') {
      if (contentType === 'text') {
        if (
          !ATopicCondition.invalid &&
          ATopicCondition.isDirty &&
          !BTopicCondition.invalid &&
          BTopicCondition.isDirty
        ) {
          setIsFormFilled(true);
        } else {
          setIsFormFilled(false);
        }
      } else if (contentType === 'image') {
        if (
          !ATopiImageURLCondition.invalid &&
          ATopiImageURLCondition.isDirty &&
          !BTopicImageURLCondition.invalid &&
          BTopicImageURLCondition.isDirty
        ) {
          setIsFormFilled(true);
        } else {
          setIsFormFilled(false);
        }
      }
    }
  }, [contentType, methods, methods.formState, step]);

  if (step === null) {
    return;
  }

  return (
    <FormProvider {...methods}>
      <Container>
        {Step}
        {isFormFilled ? (
          <SubmitButton>
            <DefaultButton
              title={'토픽 던지기'}
              onClick={handleSubmitForm}
              disabled={false}
            ></DefaultButton>
          </SubmitButton>
        ) : (
          <PageControllerContainer>
            <PageController currentStage={Number(step) === 1}>1</PageController>
            <PageControllerLine />
            <PageController currentStage={Number(step) === 2}>2</PageController>
          </PageControllerContainer>
        )}
      </Container>
    </FormProvider>
  );
};

export default BTopicCreate;
