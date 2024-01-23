import React from 'react';

import { Col, Row } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';
import LoginButton from '@components/Login/LoginButton';

import { colors, theme } from '@styles/theme';

import { ABLogoIcon, AppleIcon, GoogleIcon, KakaoIcon } from '@icons/index';

import { Container, Divider, LoginButtonContainer, LogoContainer } from './Login.styles';

const Login = () => {
  const KakaoRestApiKey = import.meta.env.VITE_KAKAO_OAUTH_KEY;
  const KakaoRedirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KakaoRestApiKey}&redirect_uri=${KakaoRedirectUri}&response_type=code`;

  const GoogleClientID = import.meta.env.VITE_GOOGLE_OAUTH_KEY;
  const GoogleRedirectUri = 'http://localhost:5173/login/google';
  const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GoogleClientID}&response_type=token&redirect_uri=${GoogleRedirectUri}&scope=https://www.googleapis.com/auth/userinfo.email`;

  const handleKaKaoLogin = () => {
    window.location.href = kakaoURL;
  };

  const handleGoogleLogin = () => {
    window.location.href = googleURL;
  };

  return (
    <Layout hasBottomNavigation={false}>
      <Container>
        <Col justifyContent="center" gap={80} style={{ height: '100%' }}>
          <Col gap={35} alignItems="center">
            <ABLogoIcon />
            <Text size={24} weight={600} align={'center'} color={theme.colors.white}>
              세상의 모든 질문,
              <br /> AB로 답하다
            </Text>
          </Col>
          <LoginButtonContainer>
            <Row gap={17} alignItems={'center'} justifyContent={'space-between'}>
              <Divider />
              <Text size={15} noWrap={true} weight={400} color={theme.colors.white}>
                간편 가입하기
              </Text>
              <Divider />
            </Row>
            <LoginButton
              onClick={handleKaKaoLogin}
              backgroundColor="#FEE500"
              Icon={() => <KakaoIcon />}
              buttonText="카카오로 계속하기"
            />
            <LoginButton
              onClick={handleGoogleLogin}
              backgroundColor={colors.white}
              Icon={() => <GoogleIcon />}
              buttonText="구글로 계속하기"
            />
            <LoginButton
              onClick={handleGoogleLogin}
              backgroundColor={colors.black}
              color={colors.white}
              Icon={() => <AppleIcon />}
              buttonText="애플로 계속하기"
            />
          </LoginButtonContainer>
        </Col>
      </Container>
    </Layout>
  );
};
export default Login;
