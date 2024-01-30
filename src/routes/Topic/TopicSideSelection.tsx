import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CloseButton from '@components/commons/Header/CloseButton/CloseButton';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { ALogoIcon, BLogoIcon, BigDownChevronIcon, TopicCreatBackgrounIcon } from '@icons/index';

import {
  SelectDescription,
  DescriptionContainer,
  DescriptionBlur,
  AButton,
  BButton,
  Background,
  ButtonContainer,
  Container,
  Description,
  DownShevron,
  ADescription,
  BDescription,
  BackgroundBlur,
  SubDescription,
  TopicCreateButton,
} from './TopicSideSelection.styles';

const TopicSideSelection = () => {
  const [selected, setSelected] = useState<'A' | 'B' | null>(null);
  const navigate = useNavigate();

  const handleAButtonClick = () => {
    setSelected('A');
  };

  const handleBButtonClick = () => {
    setSelected('B');
  };

  const handleTopicCreateButtonClick = () => {
    if (selected !== null) {
      navigate(`/topics/create/${selected}`);
    }
  };

  return (
    <Layout
      hasBottomNavigation={false}
      HeaderLeft={<CloseButton />}
      HeaderCenter={
        <Text size={20} weight={600} color={colors.white}>
          토픽 생성
        </Text>
      }
    >
      <Container>
        <SelectDescription selected={selected}>
          <Text size={14} weight={600} color={colors.purple} align="center" lineHeight={'140%'}>
            A/B사이드
            <br />
            눌러서 선택하기
          </Text>
          <DownShevron>
            <BigDownChevronIcon stroke={colors.purple} />
          </DownShevron>
        </SelectDescription>
        <ButtonContainer>
          <AButton selected={selected} onClick={handleAButtonClick}>
            <ALogoIcon />
            <ADescription selected={selected}>
              Anything <br /> Side
            </ADescription>
          </AButton>
          <BButton selected={selected} onClick={handleBButtonClick}>
            <BLogoIcon />
            <BDescription selected={selected}>
              Business <br /> Side
            </BDescription>
          </BButton>
          <DescriptionContainer selected={selected}>
            <DescriptionBlur />
            <Description>
              어떤 토픽을 <br /> 만들어 볼까요?
            </Description>
          </DescriptionContainer>
        </ButtonContainer>
        <SubDescription selected={selected}>
          <pre>
            {selected === 'A'
              ? '가벼운 주제부터 무거운 고민까지 \n 세상의 모든 토픽을 담아요'
              : '카피라이팅, A/B Test등 다양한 \n 직무의 고민과 토픽을 담아요'}
          </pre>
        </SubDescription>
        <TopicCreateButton selected={selected} onClick={handleTopicCreateButtonClick}>
          토픽 만들기
        </TopicCreateButton>
        <Background>
          <TopicCreatBackgrounIcon />
        </Background>
        <BackgroundBlur />
      </Container>
    </Layout>
  );
};

export default TopicSideSelection;
