import { styled } from 'styled-components';

import { colors } from '@styles/theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${colors.navy};
`;

export const PageControllerContainer = styled.div`
  position: absolute;
  bottom: 66px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
`;

export const PageController = styled.div<{ currentStage: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  color: ${(props) => (props.currentStage ? colors.purple : colors.navy2)};
  text-align: center;
  background-color: ${colors.navy};
  border: 2px solid ${(props) => (props.currentStage ? colors.purple : colors.navy2)};
  border-radius: 50%;
`;

export const PageControllerLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 0;
  text-align: center;
  background-color: ${colors.navy};
  border: 1px solid ${colors.navy2};
`;
