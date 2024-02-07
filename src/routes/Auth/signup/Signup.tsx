import React, { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useSearchParams } from 'react-router-dom';

import { SingnUpRequestDTO, useSignup } from '@apis/oauth/signup';
import { Col } from '@components/commons/Flex/Flex';
import InputField from '@components/commons/InputField/InputField';
import Layout from '@components/commons/Layout/Layout';
import RadioInput from '@components/commons/RadioInput/RadioInput';
import SelectInput from '@components/commons/SelectInput/SelectInput';
import Text from '@components/commons/Text/Text';
import TextInput from '@components/commons/TextInput/TextInput';
import useBottomSheet from '@hooks/useBottomSheet/useBottomSheet';

import { INPUT_TYPE, CONFIG } from '@constants/form';
import { GENDERS, JOBS } from '@constants/signup';

import { colors } from '@styles/theme';

import { ResponseError } from '@apis/fetch';

import { FormContainer, NextButton } from './Signup.styles';
import Terms from './Terms';

type SignupForm = Omit<SingnUpRequestDTO, 'memberId'>;

const MAX_NICKNAME_LENGTH = 8;

const Signup = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const methods = useForm<Omit<SingnUpRequestDTO, 'memberId'>>({ mode: 'onChange' });
  const signupMutation = useSignup();
  const { BottomSheet: TermsSheet, toggleSheet } = useBottomSheet({
    snapPoints: [0.5, 0.5, 0],
    initialSnap: 0.5,
    transparent: false,
  });

  const memberId =
    (location.state?.memberId as number) || (searchParams.get('memberId') as unknown as number);

  const birthdayInput = methods.watch(INPUT_TYPE.BIRTHDAY);
  const nicknameProgress = methods.watch(INPUT_TYPE.NICKNAME)
    ? `${methods.watch(INPUT_TYPE.NICKNAME)?.length}/${MAX_NICKNAME_LENGTH}`
    : '';

  const handleBirthdayInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && (birthdayInput?.length === 6 || birthdayInput?.length === 9)) {
      methods.setValue(INPUT_TYPE.BIRTHDAY, birthdayInput.slice(0, -2));
    }
    if (e.key === 'Backspace' && (birthdayInput?.length === 5 || birthdayInput?.length === 8)) {
      methods.setValue(INPUT_TYPE.BIRTHDAY, birthdayInput.slice(0, -1));
    }
  };

  const handleSubmitForm: SubmitHandler<SignupForm> = async (data) => {
    try {
      await signupMutation.mutateAsync({
        ...data,
        birth: data.birth.replace(/\//g, '-'),
        memberId,
      });

      toggleSheet();
    } catch (error) {
      if (error instanceof ResponseError) {
        if (error.errorData.errorContent.hint.includes('PERSONAL_REGISTERED')) {
          toggleSheet();
        } else {
          alert(error.errorData.errorContent.message);
        }
      }
    }
  };

  useEffect(() => {
    if (birthdayInput?.length === 4 || birthdayInput?.length === 7) {
      methods.setValue(INPUT_TYPE.BIRTHDAY, birthdayInput + '/');
    }
  }, [birthdayInput, methods]);

  if (!memberId) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <Layout
      hasBottomNavigation={false}
      HeaderCenter={
        <Text size={20} weight={700} color={colors.white}>
          회원정보 입력
        </Text>
      }
    >
      <FormProvider {...methods}>
        <FormContainer onSubmit={methods.handleSubmit(handleSubmitForm)}>
          <Col gap={48}>
            <InputField label="AB에서 사용할 닉네임을 정해주세요.">
              <TextInput
                id={INPUT_TYPE.NICKNAME}
                options={CONFIG.NICKNAME.options}
                placeholder={'한글, 영문, 숫자 최대 8자'}
                right={() => (
                  <Text size={14} weight={700} color={colors.purple}>
                    {nicknameProgress}
                  </Text>
                )}
              />
            </InputField>
            <InputField label="생년월일을 입력해주세요.">
              <TextInput
                id={INPUT_TYPE.BIRTHDAY}
                type={'tel'}
                options={CONFIG.BIRTHDAY.options}
                placeholder={'YYYY/MM/DD'}
                onKeyDown={handleBirthdayInputKeyDown}
              />
            </InputField>
            <InputField label="성별을 선택해주세요.">
              <RadioInput
                id={INPUT_TYPE.GENDER}
                options={CONFIG.GENDER.options}
                radioOptions={GENDERS}
              />
            </InputField>
            <InputField label="직업을 선택해주세요.">
              <SelectInput
                id={INPUT_TYPE.JOB}
                options={CONFIG.JOB.options}
                placeholder="직업 선택하기"
                selectOptions={JOBS}
              />
            </InputField>
          </Col>
          <NextButton type={'submit'} disabled={!methods.formState.isValid}>
            다음
          </NextButton>
        </FormContainer>
      </FormProvider>
      <TermsSheet>
        <Terms memberId={memberId} />
      </TermsSheet>
    </Layout>
  );
};

export default Signup;
