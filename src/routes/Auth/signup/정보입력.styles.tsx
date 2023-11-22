import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #242036;
`;

export const InputContainer = styled.div`
  top: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const NicknameInput = styled.input`
  flex-direction: column;
  width: 100%;
`;

export const BirthInput = styled.input`
  flex-direction: column;
  width: 100%;
`;

export const GenderInput = styled.input`
  flex-direction: column;
  width: 100%;
`;

export const JobInput = styled.input`
  flex-direction: column;
  width: 100%;
`;

export const NextButton = styled.button`
  width: 100%;
  height: 57px;
  color: #fff;
  cursor: pointer;
  background-color: #3c3457;
  border-radius: 10px;
`;
