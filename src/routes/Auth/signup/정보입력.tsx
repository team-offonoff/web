import React, { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { CONFIG, INPUT_TYPE } from 'src/constants/form';
import { GENDERS, JOBS } from 'src/constants/signup';

import { Col } from '@components/commons/Flex/Flex';
import InputField from '@components/commons/InputField/InputField';
import Layout from '@components/commons/Layout/Layout';
import RadioInput from '@components/commons/RadioInput/RadioInput';
import SelectInput from '@components/commons/SelectInput/SelectInput';
import Text from '@components/commons/Text/Text';
import TextInput from '@components/commons/TextInput/TextInput';

import { colors } from '@styles/theme';

import { FormContainer, NextButton } from './정보입력.styles';

export interface SignUpForm {
  NICKNAME: string;
  BIRTHDAY: string;
  GENDER: 'male' | 'female';
  JOB: string;
}

const 정보입력 = () => {
  const methods = useForm<SignUpForm>({ mode: 'onChange' });

  const birthdayInput = methods.watch(INPUT_TYPE.BIRTHDAY);
  const nicknameProgress = methods.watch(INPUT_TYPE.NICKNAME)
    ? `${methods.watch(INPUT_TYPE.NICKNAME)?.length}/8`
    : '';

  const handleBirthdayInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && (birthdayInput?.length === 6 || birthdayInput?.length === 9)) {
      methods.setValue(INPUT_TYPE.BIRTHDAY, birthdayInput.slice(0, -2));
    }
    if (e.key === 'Backspace' && (birthdayInput?.length === 5 || birthdayInput?.length === 8)) {
      methods.setValue(INPUT_TYPE.BIRTHDAY, birthdayInput.slice(0, -1));
    }
  };

  const handleSubmitForm: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (birthdayInput?.length === 4 || birthdayInput?.length === 7) {
      methods.setValue(INPUT_TYPE.BIRTHDAY, birthdayInput + '/');
    }
  }, [birthdayInput, methods]);

  return (
    <Layout
      hasBottomNavigation={false}
      HeaderCenter={() => (
        <Text size={20} weight={700} color={colors.white}>
          회원정보 입력
        </Text>
      )}
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
          <NextButton type={'submit'}>다음</NextButton>
        </FormContainer>
      </FormProvider>
    </Layout>
  );
};

export default 정보입력;
