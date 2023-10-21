import React, { useState } from 'react';
import { Container, LoginButton, LoginButtonContainer } from './Login.styles';
import { AppleLoginIcon, GoogleLoginIcon, KakaoLoginIcon } from '@icons/index';

const Login = () => {
  const KakaoRestApiKey = import.meta.env.VITE_KAKAO_OAUTH_KEY;
  const KakaoRedirectUri = 'http://localhost:5173/login/kakao';
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
    <Container>
      <LoginButtonContainer>
        <LoginButton onClick={handleKaKaoLogin}>
          <KakaoLoginIcon />
        </LoginButton>
        <LoginButton>
          <AppleLoginIcon />
        </LoginButton>
        <LoginButton onClick={handleGoogleLogin}>
          <GoogleLoginIcon />
        </LoginButton>
      </LoginButtonContainer>
    </Container>
  );
};
export default Login;
