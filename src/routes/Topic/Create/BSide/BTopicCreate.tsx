import React, { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useCreateTopics, useGetPresignedURL } from '@apis/topic/useTopics';
import TopicCreateButton from '@components/commons/Button/TopicCreateButton';
import { CHOICE_OPTIONS } from '@interfaces/api/topic';
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
  const navigate = useNavigate();
  const methods = useForm<TopicCreateDTO>({ mode: 'onChange' });
  const contentType = useWatch({
    control: methods.control,
    name: INPUT_TYPE.TOPIC_CONTENT_TYPE,
  });
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step');

  const [isStep1FormFilled, setIsStep1FormFilled] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);

  const getTopicAImgURLMutation = useGetPresignedURL();
  const getTopicBImgURLMutation = useGetPresignedURL();
  const [aPresignedURL, setAPresignedURL] = useState<string>('');
  const [bPresignedURL, setBPresignedURL] = useState<string>('');

  const createTopicMutation = useCreateTopics();

  const Step = step === '1' ? <BTopicCreateStep1 /> : <BTopicCreateStep2 />;

  const handleButtonDisabled = () => {
    if (step === '1') {
      return !isStep1FormFilled;
    } else if (step === '2') {
      return !isFormFilled;
    } else {
      return true;
    }
  };

  const handleButtonTitle = () => {
    if (step === '1') {
      if (isStep1FormFilled) {
        return '다음으로 넘어가기';
      } else {
        return '내용을 입력해 주세요';
      }
    } else if (step === '2') {
      if (isFormFilled) {
        return '토픽 던지기';
      } else {
        return '내용을 입력해 주세요';
      }
    } else {
      return '내용을 입력해 주세요';
    }
  };

  const removeQueryString = (url: string): string => {
    const urlObj = new URL(url);
    return `${urlObj.origin}${urlObj.pathname}`;
  };

  const handleDeadline = (deadline: number) => {
    const date = new Date();
    const result = Math.floor(date.getTime() / 1000) + deadline * 60 * 60;
    return result;
  };

  const navigateToNextStep = () => {
    navigate('/topics/create/B?step=2');
  };

  const handleSubmitForm = async () => {
    const data = methods.getValues();
    try {
      const Atype = data.ATopicImage.name.split('.');
      const aFileName = Atype[Atype.length - 1].toLowerCase();
      const Btype = data.BTopicImage.name.split('.');
      const bFileName = Btype[Btype.length - 1].toLowerCase();
      const aPresignedURLResponse = await getTopicAImgURLMutation.mutateAsync('.' + aFileName);
      const bPresignedURLResponse = await getTopicBImgURLMutation.mutateAsync('.' + bFileName);
      const aImageUrl = removeQueryString(aPresignedURLResponse.presignedUrl);
      const bImageUrl = removeQueryString(bPresignedURLResponse.presignedUrl);

      setAPresignedURL(aImageUrl);
      setBPresignedURL(bImageUrl);

      const aResult = await fetch(aPresignedURLResponse.presignedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'image/' + aFileName,
        },
        body: data.ATopicImage,
      });

      const bResult = await fetch(bPresignedURLResponse.presignedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'image/' + bFileName,
        },
        body: data.BTopicImage,
      });

      if (aResult.ok && bResult.ok) {
        try {
          const res = await createTopicMutation.mutateAsync({
            side: 'TOPIC_B',
            title: data.topicTitle,
            keywordName: data.topicCategory,
            deadline: handleDeadline(data.topicDeadline),
            choices: [
              {
                choiceContentRequest: {
                  text: contentType === 'text' ? data.ATopic : 'null',
                  type: 'IMAGE_TEXT',
                  imageUrl: contentType === 'image' ? aPresignedURL : null,
                },
                choiceOption: CHOICE_OPTIONS.CHOICE_A,
              },
              {
                choiceContentRequest: {
                  text: contentType === 'text' ? data.BTopic : 'null',
                  type: 'IMAGE_TEXT',
                  imageUrl: contentType === 'image' ? bPresignedURL : null,
                },
                choiceOption: CHOICE_OPTIONS.CHOICE_B,
              },
            ],
          });
          navigate(`/topics/b`);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Get PresignedURL failed');
    }
  };

  useEffect(() => {
    const ATopicCondition = methods.getFieldState(INPUT_TYPE.A_TOPIC, methods.formState);
    const BTopicCondition = methods.getFieldState(INPUT_TYPE.B_TOPIC, methods.formState);
    const ATopiImageURLCondition = methods.getFieldState(
      INPUT_TYPE.A_TOPIC_IMAGE,
      methods.formState
    );
    const BTopicImageURLCondition = methods.getFieldState(
      INPUT_TYPE.B_TOPIC_IMAGE,
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

  useEffect(() => {
    if (step === '1') {
      const TopicTitleCondition = methods.getFieldState(INPUT_TYPE.TOPIC_TITLE, methods.formState);
      const TopicCategoryCondition = methods.getFieldState(
        INPUT_TYPE.TOPIC_CATEGORY,
        methods.formState
      );
      if (
        !TopicTitleCondition.invalid &&
        TopicTitleCondition.isDirty &&
        !TopicCategoryCondition.invalid &&
        TopicCategoryCondition.isDirty
      ) {
        setIsStep1FormFilled(true);
      } else {
        setIsStep1FormFilled(false);
      }
    }
  }, [methods, methods.formState, step]);

  if (step === null) {
    return;
  }

  return (
    <FormProvider {...methods}>
      <Container>
        {Step}
        <SubmitButton>
          <TopicCreateButton
            title={handleButtonTitle()}
            onClick={step === '1' ? navigateToNextStep : handleSubmitForm}
            disabled={handleButtonDisabled()}
            topicType="B"
          />
        </SubmitButton>
      </Container>
    </FormProvider>
  );
};

export default BTopicCreate;
