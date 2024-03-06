import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { DownChevronIcon, RightChevronIcon } from '@icons/index';

import ATopicCreate from './ASide/ATopicCreate';
import BTopicCreate from './BSide/BTopicCreate';
import {
  BackButton,
  DownShevron,
  HeaderCenterContainer,
  SideButton,
  SideChangeButton,
} from './TopicCreate.sytles';

export interface TopicCreateDTO {
  topicTitle: string;
  ATopic: string;
  BTopic: string;
  topicCategory: string;
  ATopicImage: File;
  BTopicImage: File;
  topicDeadline: number;
  topicType: string;
}

const TopicCreate = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step');
  const { topicSide } = useParams();
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [isStep2, setIsStep2] = useState<boolean>(step === '2' && topicSide === 'B');

  const Container = topicSide === 'A' ? <ATopicCreate /> : <BTopicCreate />;

  const handleSideButtonClick = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  const handleSideChangeButtonClick = (newtopicSideValue: string) => {
    navigate(`/topics/create/${newtopicSideValue}?step=1`, { replace: true });
  };

  useEffect(() => {
    if (step === '2' && topicSide === 'B') {
      setIsStep2(true);
    } else {
      setIsStep2(false);
    }
  }, [step, topicSide]);

  return (
    <Layout
      hasBottomNavigation={false}
      HeaderLeft={
        <BackButton onClick={() => navigate(-1)}>
          <RightChevronIcon style={{ transform: 'rotate(180deg)' }} stroke={colors.white} />
        </BackButton>
      }
      HeaderCenter={
        <HeaderCenterContainer>
          <Text size={20} weight={600} color={colors.white}>
            토픽 만들기
          </Text>
          <SideButton side={topicSide} onClick={handleSideButtonClick} disabled={isStep2}>
            <Text size={15} weight={500} color={topicSide === 'A' ? colors.A : colors.B}>
              {topicSide} 사이드
            </Text>
            <DownShevron isStep2={isStep2}>
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
      }
    >
      {Container}
    </Layout>
  );
};

export default TopicCreate;
