import React, { useState } from 'react';
import { Container } from './GoogleLogin.styles';

const GoogleLogin = () => {
  const googleCode = new URL(window.location.href).hash.split('=')[1].split('&')[0];
  // console.log('구글 인가코드:', googleCode);

  return <Container>구글로딩화면</Container>;
};
export default GoogleLogin;
