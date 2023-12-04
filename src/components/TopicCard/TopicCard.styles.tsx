import { styled } from 'styled-components';

import { colors } from '@styles/theme';

export const Container = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.navy};
`;

export const TopicCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const SheetContainer = styled.div`
  height: 100%;
  background-color: #3c3457;
  border-radius: 20px 20px 0 0;
`;

export const BestTopicCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25px;
`;

export const TopicContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 68px;
  padding: 0 12px;
  margin-top: 20px;
`;

export const Topic = styled.div`
  width: 170px;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 140%;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2px;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220px;
  margin-top: 20px;
  margin-bottom: 7px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25px;
  margin-top: 4px;
`;

export const UserProfileImage = styled.div`
  width: 20px;
  height: 20px;
  background-color: #555;
  border-radius: 50%;
`;

export const SelectTextContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  margin: 4px 0 0;
`;
