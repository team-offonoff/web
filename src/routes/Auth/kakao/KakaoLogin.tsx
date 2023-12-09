import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { kakaoLogin } from '@apis/oauth/kakao';

import { ResponseError } from '@apis/fetch';

import { Container } from './KakaoLogin.styles';

const KakaoLogin = () => {
  const kakaoCode = new URL(window.location.href).searchParams.get('code');

  const navigate = useNavigate();

  const handleKakaoLogin = async () => {
    if (kakaoCode) {
      try {
        const response = await kakaoLogin(kakaoCode);
        if (response && response.accessToken) {
          response.newMember ? navigate('/onboard') : navigate('/');
        }
      } catch (err) {
        if (err instanceof ResponseError) {
          if (err.errorData.abCode === 'ILLEGAL_JOIN_STATUS') {
            navigate(`/signup`, { state: { memberId: err.errorData.errorContent.payload } });
          }
        }
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
