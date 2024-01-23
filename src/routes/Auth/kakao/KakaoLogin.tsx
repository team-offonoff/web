import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from 'src/store/auth';

import { kakaoLogin } from '@apis/oauth/kakao';

import { ResponseError } from '@apis/fetch';

import Login from '../login/Login';

import { Container } from './KakaoLogin.styles';

const KakaoLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const kakaoCode = new URL(window.location.href).searchParams.get('code');

  const navigate = useNavigate();

  const handleKakaoLogin = async () => {
    if (kakaoCode) {
      try {
        const response = await kakaoLogin(kakaoCode);
        if (response && response.accessToken) {
          if (response.newMember) {
            navigate(`/signup`, {
              state: { memberId: response.memberId },
            });
          } else {
            setUser({ memberId: response.memberId, accessToken: response.accessToken });
            navigate('/');
          }
        }
      } catch (err) {
        if (err instanceof ResponseError) {
          if (err.errorData.abCode === 'ILLEGAL_JOIN_STATUS') {
            navigate(`/signup`, {
              state: { memberId: err.errorData.errorContent.payload },
            });
            return;
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

  return (
    <Container>
      <Login />
    </Container>
  );
};
export default KakaoLogin;
