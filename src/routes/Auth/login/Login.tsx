import React from 'react';

import { Row } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import { ABLogoIcon, AppleIcon, GoogleIcon, KakaoIcon } from '@icons/index';

import {
  Container,
  Divider,
  LoginButton,
  LoginButtonContainer,
  LogoContainer,
} from './Login.styles';

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
        <div>
          <LogoContainer>
            <ABLogoIcon />
          </LogoContainer>
          <Text size={24} weight={600} align={'center'}>
            세상의 모든 질문,
            <br /> AB로 답하다
          </Text>
        </div>
        <LoginButtonContainer>
          <Row padding={'0 20px'} gap={'17px'}>
            <Divider />
            <Text size={15} noWrap>
              간편 가입하기
            </Text>
            <Divider />
          </Row>
          <LoginButton onClick={handleKaKaoLogin} style={{ backgroundColor: '#FEE500' }}>
            <Row padding={'15px 20px'}>
              <KakaoIcon />
              <Text size={16} color={colors.black} weight={'bold'}>
                카카오로 계속하기
              </Text>
              <div style={{ width: 18, height: 18 }} />
            </Row>
          </LoginButton>
          <LoginButton onClick={handleGoogleLogin} style={{ backgroundColor: colors.white }}>
            <Row padding={'15px 20px'}>
              <GoogleIcon />
              <Text size={16} color={colors.black} weight={'bold'}>
                구글로 계속하기
              </Text>
              <div style={{ width: 18, height: 18 }} />
            </Row>
          </LoginButton>
          <LoginButton onClick={handleGoogleLogin} style={{ backgroundColor: colors.black }}>
            <Row padding={'15px 20px'}>
              <AppleIcon />
              <Text size={16} color={colors.white} weight={'bold'}>
                애플로 계속하기
              </Text>
              <div style={{ width: 18, height: 18 }} />
            </Row>
          </LoginButton>
        </LoginButtonContainer>
      </Container>
    </Layout>
  );
};
export default Login;
