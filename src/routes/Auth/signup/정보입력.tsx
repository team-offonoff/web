import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { CONFIG } from 'src/constants/form';

import TextInput from '@components/commons/TextInput/TextInput';

import { Container, NextButton } from './정보입력.styles';

export interface SignUpForm {
  nickname: string;
}

const 정보입력 = () => {
  const methods = useForm<SignUpForm>({ mode: 'onChange' });

  const handleSubmitForm: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
          <TextInput
            id={'NICKNAME'}
            options={CONFIG.NICKNAME.options}
            placeholder={'한글, 영문, 숫자 최대 8자'}
          />
          <NextButton type={'submit'}>다음</NextButton>
        </form>
      </FormProvider>
    </Container>
  );
};

export default 정보입력;
