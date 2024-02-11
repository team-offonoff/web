import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.navy};
`;

export const TopicCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  overflow: hidden;
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
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 140%;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2px;
`;

export const SkipButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4px;
  cursor: pointer;
`;

export const SkipButton = styled.button`
  font-size: 1.3rem;
  font-weight: 400;
  color: rgb(255 255 255 / 40%);
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
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

export const UserProfileImage = styled.img`
  width: 20px;
  height: 20px;
  background-color: #555;
  border-radius: 50%;
`;

export const SelectTextContainer = styled.div<{ $voted: boolean }>`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  margin: 4px 0 0;
  visibility: ${(props) => (props.$voted ? 'hidden' : 'visible')};
`;
