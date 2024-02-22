import styled from 'styled-components';

import { colors } from '@styles/theme';

export const CommentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
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
  padding: 10px 16px;
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
  justify-content: center;
  width: 100%;
  background-color: ${colors.navy2};
  border-radius: 0 0 10px 10px;
`;

export const Blur = styled('div')<{ $voted: boolean }>`
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  filter: ${(props) => (!props.$voted ? 'blur(2px)' : 'unset')};
`;

export const HighlightText = styled.span`
  color: white;
`;

export const CommentButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 30px;
  padding: 4px 14px;
  margin: 14px 0;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 0%;
  color: ${colors.white};
  text-align: center;
  background-color: ${colors.purple};
  border-radius: 91px;
`;
