import { styled } from 'styled-components';

import { colors } from '@styles/theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding-top: 19px;
  background-color: ${(props) => props.theme.colors.navy};
`;

export const BackButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 3.6px 7.8px;
`;

export const EmptyDiv = styled.div`
  width: 24px;
  height: 24px;
`;
