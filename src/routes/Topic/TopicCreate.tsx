import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CloseButton from '@components/commons/Header/CloseButton/CloseButton';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { ALogoIcon, RightChevronIcon } from '@icons/index';

import { BackButton } from './TopicCreate.sytles';
import { Container, EmptyDiv } from './TopicSideSelection.styles';

const TopicCreate = () => {
  const [selected, setSelected] = useState<'A' | 'B' | null>(null);
  const navigate = useNavigate();
  return (
    <Layout
      hasBottomNavigation={false}
      HeaderLeft={() => (
        <BackButton onClick={() => navigate(-1)}>
          <RightChevronIcon style={{ transform: 'rotate(180deg)' }} stroke={colors.white} />
        </BackButton>
      )}
      HeaderCenter={() => (
        <Text size={20} weight={600} color={colors.white}>
          토픽 만들기
        </Text>
      )}
      HeaderRight={() => <EmptyDiv />}
    >
      <Container></Container>
    </Layout>
  );
};

export default TopicCreate;
