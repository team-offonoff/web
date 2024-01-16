import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.navy};
`;

export const SelectedTabIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  width: 60px;
  height: 18px;
  background-color: ${({ theme }) => theme.colors.black};
  transform: translate(-50%, -50%) rotate(-6.84deg);
`;
