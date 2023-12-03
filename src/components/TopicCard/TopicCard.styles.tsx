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
  margin: 4px 132px 0;
`;

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

export const Blur = styled.div<{ isVote: boolean }>`
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 29px;
  background-color: transparent;
  filter: ${(props) => (!props.isVote ? 'blur(2px)' : 'blur(0px)')};
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
