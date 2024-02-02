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
  padding: 30px 0 0;
  background-color: ${colors.navy};
`;

export const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.white_20};
`;

export const SelectIconContainer = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background-color: ${(props) => (!props.selected ? colors.navy : colors.black)};
  border: ${(props) => (!props.selected ? `1px solid ${colors.white_20}` : 'none')};
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
`;

export const DeadlineInputContainer = styled.div`
  position: relative;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
`;

export const DeadlineInputButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
`;

export const DeadlineInput = styled.select`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 24px;
  opacity: 0;
  transform: translate(-50%, -50%);
`;
