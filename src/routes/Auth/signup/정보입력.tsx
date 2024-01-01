import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { CONFIG, INPUT_TYPE } from 'src/constants/form';

import Text from '@components/commons/Text/Text';
import TextInput from '@components/commons/TextInput/TextInput';

import { colors } from '@styles/theme';

import { Container, NextButton } from './정보입력.styles';

export interface SignUpForm {
  NICKNAME: string;
}

const 정보입력 = () => {
  const methods = useForm<SignUpForm>({ mode: 'onChange' });

  const handleSubmitForm: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };

  const nicknameProgress = methods.watch(INPUT_TYPE.NICKNAME)
    ? `${methods.watch(INPUT_TYPE.NICKNAME)?.length}/8`
    : '';

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
          <TextInput
            id={INPUT_TYPE.NICKNAME}
            options={CONFIG.NICKNAME.options}
            placeholder={'한글, 영문, 숫자 최대 8자'}
            right={() => (
              <Text size={14} weight={700} color={colors.sub_purple}>
                {nicknameProgress}
              </Text>
            )}
          />
          <NextButton type={'submit'}>다음</NextButton>
        </form>
      </FormProvider>
    </Container>
  );
};

export default 정보입력;
