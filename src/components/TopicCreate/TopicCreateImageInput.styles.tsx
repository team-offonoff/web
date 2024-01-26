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

export const ImageInputContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 122px;
  height: 124px;
  overflow: hidden;
  background-color: ${colors.navy2_80};
  border-radius: 10px;
`;

export const Image = styled.img`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImageInputTextContainer = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
`;

export const ImageInputDescriptionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`;

export const InputSuffix = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;
