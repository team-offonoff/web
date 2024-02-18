import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Row } from '@components/commons/Flex/Flex';
import Layout from '@components/commons/Layout/Layout';
import Text from '@components/commons/Text/Text';
import LoginButton from '@components/Login/LoginButton';

import { useAuthStore } from '@store/auth';

import { colors, theme } from '@styles/theme';

import { ABLogoIcon, AppleIcon, GoogleIcon, KakaoIcon, ProfileIcon } from '@icons/index';

import { Container, Divider, LoginButtonContainer } from './Login.styles';

function getLoginUrl(type: 'kakao' | 'google' | 'apple') {
  const key = import.meta.env[`VITE_${type.toUpperCase()}_OAUTH_KEY`];
  const redirectUrl = import.meta.env[`VITE_${type.toUpperCase()}_REDIRECT_URI`];

  if (type === 'kakao') {
    return `https://kauth.kakao.com/oauth/authorize?client_id=${key}&redirect_uri=${redirectUrl}&response_type=code`;
  } else if (type === 'google') {
    return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${key}&response_type=code&redirect_uri=${redirectUrl}&scope=https://www.googleapis.com/auth/userinfo.email`;
  } else {
    return 'apple';
  }
}

const Login = () => {
  const login = useAuthStore((store) => store.login);
  const navigate = useNavigate();

  const kakaoURL = getLoginUrl('kakao');
  const googleURL = getLoginUrl('google');

  const handleKaKaoLogin = () => {
    window.location.href = kakaoURL;
  };

  const handleGoogleLogin = () => {
    window.location.href = googleURL;
  };

  const handleAdminLogin = () => {
    login(import.meta.env.VITE_API_ACCESS_TOKEN, '', 4);
    navigate('/');
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
            {import.meta.env.DEV && (
              <LoginButton
                onClick={handleAdminLogin}
                backgroundColor={colors.purple}
                color={colors.white}
                Icon={() => <ProfileIcon />}
                buttonText="어드민으로 로그인"
              />
            )}
          </LoginButtonContainer>
        </Col>
      </Container>
    </Layout>
  );
};
export default Login;
