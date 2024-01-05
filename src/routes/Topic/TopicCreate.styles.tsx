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

export const EmptyDiv = styled.div`
  width: 24px;
  height: 24px;
`;

export const DownShevron = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 2px;
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 422.52px;
  height: 345px;
  padding: 0 -2px 0 -45.52px;
`;
