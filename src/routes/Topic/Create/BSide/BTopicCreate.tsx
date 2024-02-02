import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  Container,
  PageController,
  PageControllerContainer,
  PageControllerLine,
} from './BTopicCreate.styles';
import BTopicCreateStep1 from './BTopicCreateStep1';
import BTopicCreateStep2 from './BTopicCreateStep2';

interface TopicCreateDTO {
  topicTitle: string;
  ATopic: string;
  BTopic: string;
  topicCategory: string;
  aTopicImageURL: string;
  bTopicImageURL: string;
}

const BTopicCreate = () => {
  const navigate = useNavigate();
  const methods = useForm<TopicCreateDTO>({ mode: 'onChange' });
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step');

  const navigateToNextStep = () => {
    navigate('/topics/create/B?step=2');
  };

  if (step === null) {
    return;
  }

  const Step =
    step === '1' ? (
      <BTopicCreateStep1 />
    ) : (
      <BTopicCreateStep2 topicTitle="툴 어떤게 좋을까요?" topicCategory="디자인" />
    );

  return (
    <FormProvider {...methods}>
      <Container>
        {Step}
        <PageControllerContainer>
          <PageController currentStage={Number(step) === 1}>1</PageController>
          <PageControllerLine />
          <PageController onClick={navigateToNextStep} currentStage={Number(step) === 2}>
            2
          </PageController>
        </PageControllerContainer>
      </Container>
    </FormProvider>
  );
};

export default BTopicCreate;
