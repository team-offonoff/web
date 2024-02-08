import styled from 'styled-components';

import { colors } from '@styles/theme';

import { getScreenWidth } from '../../../utils/screenWidth';

const SlideContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${getScreenWidth()}px;
  height: 148px;
  overflow: hidden;
`;

export const AlphaSideContainer = styled(SlideContainer)`
  position: relative;
  justify-content: flex-end;
  background-image: linear-gradient(270deg, #d04376 56.25%, transparent 100%);
  border-top-right-radius: 74px;
  border-bottom-right-radius: 74px;
`;

export const BetaSideContainer = styled(SlideContainer)`
  position: relative;
  justify-content: flex-start;
  background: linear-gradient(90deg, #1498aa 56.25%, rgb(20 152 170 / 0%) 100%);
  border-top-left-radius: 74px;
  border-bottom-left-radius: 74px;
`;

export const TextContainer = styled.div`
  z-index: 1;
  justify-content: flex-start;
  width: 87px;
  padding: 0 44px;
  word-break: break-all;
`;

export const SideImage = styled.img`
  position: absolute;
  width: 136px;
  height: 136px;
  margin: 6px;
  background: ${colors.white};
  border-radius: 50%;
`;

export const AlphaSizeUpButton = styled.button`
  position: absolute;
  top: 6px;
  left: 150px;
  width: 24px;
  height: 24px;
  background: rgb(0 0 0 / 40%);
  border-radius: 50%;
`;

export const BetaSizeUpButton = styled.button`
  position: absolute;
  top: 6px;
  right: 150px;
  width: 24px;
  height: 24px;
  background: rgb(0 0 0 / 40%);
  border-radius: 50%;
`;

export const ModalContainer = styled.div<{ side: 'A' | 'B' }>`
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
