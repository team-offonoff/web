import { styled } from 'styled-components';

import { colors } from '@styles/theme';

export const ReplaceButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
`;

export const ReplaceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
`;

export const InputSuffix = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;

export const ImageInputDescription = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
  background-color: rgb(255 255 255 / 4%);
  border-radius: 10px;
`;
