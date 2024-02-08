import { color } from 'framer-motion';
import { styled } from 'styled-components';

import { colors } from '@styles/theme';

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

export const ImageCover = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.navy2_40};
`;

export const ImageInputTextContainer = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transform: translateX(-50%);
`;

export const ImageInputChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 22px;
  background-color: ${colors.navy2_40};
  border-radius: 20px;
`;

export const ImageInputDescriptionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  left: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 7px;
  background: ${colors.navy_40};
  border: 1px solid ${colors.white_40};
  border-radius: 50%;
  transform: translate(-50%, 0);
`;

export const ModalContainer = styled.div<{ side: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 488px;
  overflow: hidden;
  background-color: ${(props) => (props.side === 'A' ? colors.A : colors.B)};
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 340px;
  background-color: ${colors.white};
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 148px;
  overflow: hidden;
`;

export const ModalContentText = styled.div`
  position: absolute;
  display: flex;
  font-size: 24px;
  font-weight: 600;
  color: ${colors.white};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 24px;
  height: 24px;
  padding: 5px;
  background: rgb(0 0 0 / 60%);
  border-radius: 50%;
`;

export const DescriptionContainer = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`;
