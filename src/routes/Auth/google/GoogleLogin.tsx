import React, { useEffect } from 'react';

import Loading from '@components/commons/Loading/Loading';
import useOAuth from '@hooks/useOAuth/useOAuth';

import Login from '../login/Login';

import { Container } from './GoogleLogin.styles';

const GoogleLogin = () => {
  const oauth = useOAuth({ type: 'google' });
  const code = oauth.getCode();

  const handleGoogleLogin = async () => {
    if (code) {
      oauth.handleLogin(code);
    } else {
      throw new Error('code is invalid');
    }
  };

  useEffect(() => {
    handleGoogleLogin();
  }, []);

  return (
    <Container>
      <Loading />
      <Login />
    </Container>
  );
};
export default GoogleLogin;
