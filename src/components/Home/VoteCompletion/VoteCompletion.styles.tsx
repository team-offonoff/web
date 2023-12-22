import styled from 'styled-components';

import { colors } from '@styles/theme';

export const VoteCompletionContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 246px;
  padding: 55px 20px 0;
`;

export const VoteCompletionLabel = styled.div`
  position: absolute;
  left: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 27px;
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${colors.navy2};
  border-radius: 30px;
  transform: translate(-50%, -50%);
`;

export const VoteCompletionBackground = styled.div<{ side: 'A' | 'B' }>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 148px;
  overflow: hidden;
  background-color: ${(props) =>
    props.side === 'A' ? 'rgb(208 67 118 / 20%)' : 'rgb(20 152 170 / 20%)'};
  border-radius: 10px;
`;

export const VoteCompletionTextContainer = styled.div`
  position: absolute;
  top: -43px;
`;
