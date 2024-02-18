import React, { useEffect } from 'react';

import Loading from '@components/commons/Loading/Loading';
import useOAuth from '@hooks/useOAuth/useOAuth';

import Login from '../login/Login';

import { Container } from './KakaoLogin.styles';

const KakaoLogin = () => {
  const oauth = useOAuth({ type: 'kakao' });
  const kakaoCode = oauth.getCode();

  const handleKakaoLogin = async () => {
    if (kakaoCode) {
      oauth.handleLogin(kakaoCode);
    } else {
      throw new Error('code is invalid');
    }
  };

  useEffect(() => {
    handleKakaoLogin();
  }, []);

  return (
    <Container>
      <Loading />
      <Login />
    </Container>
  );
};
export default KakaoLogin;
