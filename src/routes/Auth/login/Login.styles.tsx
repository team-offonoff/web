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

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.white_60};
`;

export const LoginButtonContainer = styled.div`
  position: absolute;
  bottom: 104px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  justify-content: flex-end;
  width: 100%;
  padding: 0 20px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
`;
