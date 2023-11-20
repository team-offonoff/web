import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
  background-color: #242036;
`;

export const LoginButtonContainer = styled.button`
  position: absolute;
  bottom: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 57px;
  cursor: pointer;
`;
