import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from 'src/store/auth';

import { kakaoLogin } from '@apis/oauth/kakao';
import { Row } from '@components/commons/Flex/Flex';

import { colors, zIndex } from '@styles/theme';

import { ALogoIcon, BLogoIcon } from '@icons/index';

import client, { ResponseError } from '@apis/fetch';

import Login from '../login/Login';

import { Container } from './KakaoLogin.styles';

const KakaoLogin = () => {
  const kakaoCode = new URL(window.location.href).searchParams.get('code');

  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

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
            client.setAccessToken(response.accessToken);
            login();
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
      <div
        className="loading"
        style={{
          position: 'fixed',
          overflow: 'hidden',
          height: '100vh',
          width: '100vw',
          zIndex: zIndex.modal,
          backgroundColor: colors.navy_60,
        }}
      >
        <Row
          justifyContent={'center'}
          alignItems={'center'}
          gap={7.5}
          style={{ width: '100%', height: '100%' }}
        >
          <ALogoIcon width={65} />
          <BLogoIcon width={66} />
        </Row>
      </div>
      <Login />
    </Container>
  );
};
export default KakaoLogin;
