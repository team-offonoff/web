import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { INPUT_TYPE } from 'src/constants/form';

import DefaultButton from '@components/commons/Button/DefaultButton';

import {
  Container,
  PageController,
  PageControllerContainer,
  PageControllerLine,
  SubmitButton,
} from './BTopicCreate.styles';
import BTopicCreateStep1 from './BTopicCreateStep1';
import BTopicCreateStep2 from './BTopicCreateStep2';

interface TopicCreateDTO {
  topicTitle: string;
  ATopic: string;
  BTopic: string;
  topicCategory: string;
  ATopicImageURL: string;
  BTopicImageURL: string;
  topicDeadline: string;
  topicType: string;
}

const BTopicCreate = () => {
  const methods = useForm<TopicCreateDTO>({ mode: 'onChange' });
  const contentType = useWatch({
    control: methods.control,
    name: INPUT_TYPE.TOPIC_CONTENT_TYPE,
  });
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step');

  const [isFormFilled, setIsFormFilled] = useState(false);

  const Step = step === '1' ? <BTopicCreateStep1 /> : <BTopicCreateStep2 />;

  const handleSubmitButtonClick = () => {
    console.log('submit');
  };

  useEffect(() => {
    console.log('ㅋ', contentType);
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
              onClick={handleSubmitButtonClick}
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
