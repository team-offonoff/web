import styled from 'styled-components';

import { colors } from '@styles/theme';

export const CommentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 41px 20px 0;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 22px;
`;

export const KeywordContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: flex-start;
`;

export const CommnetBodyContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CommentInfoContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  margin-top: 11px;
  background-color: #64519b;
  border-radius: 10px 10px 0 0;
`;

export const Comment = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 57px;
  padding: 0 16px;
  background-color: ${colors.navy2};
  border-radius: 0 0 10px 10px;
`;

export const Blur = styled('div')<{ $voted: boolean }>`
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 29px;
  background-color: transparent;
  filter: ${(props) => (!props.$voted ? 'blur(2px)' : 'blur(0px)')};
`;

export const HighlightText = styled.span`
  color: white;
`;

export const CommentButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 30px;
  padding: 4px 14px;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 0%;
  color: ${colors.white};
  text-align: center;
  background-color: ${colors.purple};
  border-radius: 91px;
  transform: translate(-50%, -50%);
`;
