import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { kakaoLogin } from '@apis/oauth/kakao';
import { Row } from '@components/commons/Flex/Flex';

import { useAuthStore } from '@store/auth';

import { colors, zIndex } from '@styles/theme';

import { ALogoIcon, BLogoIcon } from '@icons/index';

import client, { ResponseError } from '@apis/fetch';

import Login from '../login/Login';

import { Container } from './KakaoLogin.styles';

const KakaoLogin = () => {
  const kakaoCode = new URL(window.location.href).searchParams.get('code');

  const navigate = useNavigate();
  const login = useAuthStore((store) => store.login);

  const handleKakaoLogin = async () => {
    if (kakaoCode) {
      try {
        const response = await kakaoLogin(kakaoCode);
        if (response.newMember) {
          navigate(`/signup`, {
            state: { memberId: response.memberId },
          });
        } else {
          client.setAccessToken(response.accessToken);
          login(response.memberId);
          navigate('/');
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
          height: 'calc(var(--vh, 1vh) * 100)',
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
          <ALogoIcon width={65} fill={colors.A} />
          <BLogoIcon width={66} />
        </Row>
      </div>
      <Login />
    </Container>
  );
};
export default KakaoLogin;
