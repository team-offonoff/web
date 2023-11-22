import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { kakaoLogin } from '@apis/oauth/kakao';

import { Container } from './KakaoLogin.styles';

const KakaoLogin = () => {
  const kakaoCode = new URL(window.location.href).searchParams.get('code');

  const navigate = useNavigate();

  const handleKakaoLogin = async () => {
    if (kakaoCode) {
      const response = await kakaoLogin(kakaoCode);

      if (response.accessToken) {
        /** TBD */
        response.newMember ? navigate('/onboard') : navigate('/');
      }
    } else {
      throw new Error('code is invalid');
    }
  };

  useEffect(() => {
    handleKakaoLogin();
  }, []);

  return <Container>카카오로딩화면</Container>;
};
export default KakaoLogin;
