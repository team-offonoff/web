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
  padding: 54px 0 0;
  background-color: ${colors.navy};
`;

export const CategoryChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  padding-right: 20px;
  overflow-x: scroll;
  background-color: ${colors.navy};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryChip = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.purple};
  text-align: center;
  white-space: nowrap;
  background-color: ${colors.navy};
  border: 1px solid ${colors.navy2};
  border-radius: 23px;
`;
