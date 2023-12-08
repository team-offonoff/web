import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.navy};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 118px;
  padding-bottom: 35px;
`;

export const LoginButtonContainer = styled.div`
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
