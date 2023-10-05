import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: #242036;
`;

export const AlarmButton = styled.div`
  width: 24px;
  height: 24px;
`;

export const BestTopicCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 28px;
`;

export const BestTopicTitle = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: #a46ff3;
  text-align: center;
`;

export const TopicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const NavigateButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
`;

export const SkipButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4px;
`;

export const SkipButton = styled.button`
  font-size: 1.3rem;
  font-weight: 400;
  color: rgb(255 255 255 / 40%);
  text-align: center;
  text-decoration: underline;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 37px;
  margin-top: 37px;
`;

export const Timer = styled.div<{ isLessThanOneHour: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 37px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => (props.isLessThanOneHour ? '#3C3457' : 'rgb(255 255 255 / 40%)')};
  text-align: center;
  background-color: ${(props) => (props.isLessThanOneHour ? '#A46FF3' : '#3c3457')};
  border-radius: 50px;
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

export const UserProfileName = styled.div`
  margin-top: 2.5px;
  font-size: 1.8rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
`;
