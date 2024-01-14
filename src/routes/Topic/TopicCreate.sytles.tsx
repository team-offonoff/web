import { styled } from 'styled-components';

import { colors } from '@styles/theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  padding: 51px 20px 0;
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

export const HeaderCenterContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const SideButton = styled.button<{ side: string | undefined }>`
  position: relative;
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 25px;
  padding: 2px 10px;
  background-color: ${(props) =>
    props.side === 'A' ? 'rgb(208 67 118 / 20%)' : 'rgb(20 152 170 / 20%)'};
  border-radius: 36px;
`;

export const SideChangeButton = styled.button<{ side: string | undefined; isHidden: boolean }>`
  position: absolute;
  bottom: -42px;
  left: -9.5px;
  z-index: 1;
  display: flex;
  gap: 1px;
  align-items: center;
  justify-content: center;
  width: 154px;
  height: 32px;
  padding: 6px 20px;
  visibility: ${(props) => (props.isHidden ? 'hidden' : 'visible')};
  background-color: ${(props) =>
    props.side === 'B' ? 'rgb(208 67 118 / 20%)' : 'rgb(20 152 170 / 20%)'};
  border-radius: 50px;
`;

export const DownShevron = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 14px;
  height: 14px;
`;
