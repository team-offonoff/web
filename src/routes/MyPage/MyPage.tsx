import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Row } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import ProfileImg from '@components/commons/ProfileImg/ProfileImg';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { RightChevronIcon } from '@icons/index';

import { BackButton, Container, Divider, MyInfoUpdateButton } from './MyPage.styles';

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <Layout
      hasBottomNavigation={true}
      HeaderLeft={
        <BackButton onClick={() => navigate(-1)}>
          <RightChevronIcon style={{ transform: 'rotate(180deg)' }} stroke={colors.white} />
        </BackButton>
      }
      HeaderCenter={
        <Text size={20} weight={600} color={colors.white}>
          MY
        </Text>
      }
    >
      <Container>
        <Col gap={100} alignItems="center">
          <Col gap={30} alignItems="center">
            <ProfileImg url={null} size={102} rounded={true}></ProfileImg>
            <Text size={22} weight={600} color={colors.white}>
              사용자 이름
            </Text>
          </Col>
          <Col gap={32} alignItems="flex-start">
            <Row padding="0 7px" gap={3} alignItems="center">
              <Text size={16} weight={400} color={colors.white}>
                내 정보 수정
              </Text>
              <MyInfoUpdateButton>
                <RightChevronIcon stroke={colors.white_40} />
              </MyInfoUpdateButton>
            </Row>
            <Divider />
            <Text style={{ padding: '0 7px' }} size={16} weight={400} color={colors.white}>
              약관
            </Text>
            <Row padding="0 7px" gap={10} alignItems="center">
              <Text size={16} weight={400} color={colors.white}>
                버전 정보
              </Text>
              <Text size={15} weight={400} color={colors.purple}>
                ver 1.1
              </Text>
            </Row>
            <Divider />
            <Text style={{ padding: '0 7px' }} size={16} weight={400} color={colors.white_40}>
              로그아웃
            </Text>
          </Col>
        </Col>
      </Container>
    </Layout>
  );
};

export default MyPage;
