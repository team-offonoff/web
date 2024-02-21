import { color } from 'framer-motion';
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
  padding: 24px 20px 0;
  background-color: ${(props) => props.theme.colors.navy};
`;
export const BackButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 3.6px 7.8px;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1px;
  background-color: ${colors.white_20};
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
