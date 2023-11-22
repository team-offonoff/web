import React from 'react';

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
        <NicknameInput />
        <BirthInput />
        <GenderInput type="radio" name="gender" value="male" id="male" />
        <label htmlFor="male">남성</label>
        <GenderInput type="radio" name="gender" value="female" id="female" />
        <label htmlFor="female">여성</label>
        <JobInput />
      </InputContainer>
      <NextButton onClick={handleNextButton}>다음</NextButton>
    </Container>
  );
};

export default 정보입력;
