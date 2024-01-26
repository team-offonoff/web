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
  padding: 54px 20px 0;
  background-color: ${colors.navy};
`;

export const ReplaceButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
  width: 111px;
  height: 18px;
`;

export const ReplaceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
`;

export const TextInputContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 57px;
  overflow: hidden;
  background-color: ${colors.navy2};
  border-radius: 10px;
  opacity: 0.4;
`;

export const TextInputTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`;

export const SubmitButton = styled.div`
  position: absolute;
  bottom: 48px;
  left: 50%;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  transform: translateX(-50%);
`;
