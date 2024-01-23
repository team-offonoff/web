import { styled } from 'styled-components';

import { colors } from '@styles/theme';

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
  background-color: transparent;
  border-radius: 10px;
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

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 16px;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.white};
  background-color: rgb(77 59 124 / 40%);
  border: none;
  border-radius: 10px;
  outline: none;

  &::placeholder {
    color: ${colors.purple};
  }
`;

export const InputSuffix = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;
