import React from 'react';

import CloseButton from '@components/commons/Header/CloseButton/CloseButton';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { DownChevronIcon, TopicCreatBackgrounIcon } from '@icons/index';

import { Background, Container, DownShevron, EmptyDiv } from './TopicCreate.styles';

const TopicCreate = () => {
  return (
    <Layout
      hasBottomNavigation={false}
      HeaderLeft={() => <CloseButton />}
      HeaderCenter={() => (
        <Text size={20} weight={600} color={colors.white}>
          토픽 생성
        </Text>
      )}
      HeaderRight={() => <EmptyDiv />}
    >
      <Container>
        <Text size={14} weight={600} color={colors.purple} align="center" lineHeight={'140%'}>
          A/B사이드
          <br />
          눌러서 선택하기
        </Text>
        <DownShevron>
          <DownChevronIcon />
        </DownShevron>
        <Background>
          <TopicCreatBackgrounIcon />
        </Background>
      </Container>
    </Layout>
  );
};

export default TopicCreate;
