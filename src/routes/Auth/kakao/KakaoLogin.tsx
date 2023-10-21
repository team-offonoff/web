import React, { useState } from 'react';
import { Container } from './KakaoLogin.styles';

const KakaoLogin = () => {
  const kakaoCode = new URL(window.location.href).searchParams.get('code');
  // console.log('카카오 인가코드:', kakaoCode);

  return <Container>카카오로딩화면</Container>;
};
export default KakaoLogin;
