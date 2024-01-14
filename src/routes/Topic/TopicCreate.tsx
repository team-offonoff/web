import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { DownChevronIcon, RightChevronIcon } from '@icons/index';

import {
  BackButton,
  DownShevron,
  HeaderCenterContainer,
  SideButton,
  SideChangeButton,
  Container,
  EmptyDiv,
} from './TopicCreate.sytles';

const TopicCreate = () => {
  const navigate = useNavigate();
  const { topicSide } = useParams();
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const handleSideButtonClick = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  const handleSideChangeButtonClick = (newtopicSideValue: string) => {
    navigate(`/topics/create/${newtopicSideValue}`);
  };

  return (
    <Layout
      hasBottomNavigation={false}
      HeaderLeft={() => (
        <BackButton onClick={() => navigate(`/topics/create`)}>
          <RightChevronIcon style={{ transform: 'rotate(180deg)' }} stroke={colors.white} />
        </BackButton>
      )}
      HeaderCenter={() => (
        <HeaderCenterContainer>
          <Text size={20} weight={600} color={colors.white}>
            토픽 만들기
          </Text>
          <SideButton side={topicSide} onClick={handleSideButtonClick}>
            <Text size={15} weight={500} color={topicSide === 'A' ? colors.A : colors.B}>
              {topicSide} 사이드
            </Text>
            <DownShevron>
              <DownChevronIcon stroke={topicSide === 'A' ? colors.A : colors.B} />
            </DownShevron>
            <SideChangeButton
              side={topicSide}
              isHidden={isHidden}
              onClick={() => handleSideChangeButtonClick(topicSide === 'A' ? 'B' : 'A')}
            >
              <Text size={14} weight={500} color={topicSide === 'A' ? colors.B : colors.A}>
                {topicSide === 'A' ? 'B' : 'A'} 사이드
              </Text>
              <Text size={14} weight={500} color={colors.white}>
                로 변경하기
              </Text>
            </SideChangeButton>
          </SideButton>
        </HeaderCenterContainer>
      )}
      HeaderRight={() => <EmptyDiv />}
    >
      <Container>
        <Text size={18} weight={400} color={colors.white_60} align="start">
          어떤 주제로 물어볼까요?
        </Text>
      </Container>
    </Layout>
  );
};

export default TopicCreate;
