import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.navy};
`;

export const TopicCardContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  height: 28px;
`;

export const TopicContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 68px;
  padding: 0 12px;
  margin-top: 12px;
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

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 188px;
  margin-top: 37px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25px;
  margin-top: 49px;
`;

export const UserProfileImage = styled.div`
  width: 20px;
  height: 20px;
  background-color: #bcbcbc;
  border-radius: 50%;
`;
