import React from 'react';

import TextInput from '@components/commons/TextInput/TextInput';

import {
  BirthInput,
  Container,
  GenderInput,
  InputContainer,
  JobInput,
  NextButton,
  NicknameInput,
} from './정보입력.styles';

const 정보입력 = () => {
  const handleNextButton = () => {
    //다음버튼 누르면
  };

  return (
    <Container>
      <InputContainer>
        <TextInput
          placeholder={''}
          value={''}
          onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.');
          }}
        />
      </InputContainer>
      <NextButton onClick={handleNextButton}>다음</NextButton>
    </Container>
  );
};

export default 정보입력;
