import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.navy};
`;

export const NextButton = styled.button`
  width: 100%;
  height: 57px;
  color: #fff;
  cursor: pointer;
  background-color: #3c3457;
  border-radius: 10px;
`;
