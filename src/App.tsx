import React from 'react';

import GlobalStyle from '@styles/global';

import Router from './routes';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const googleClientId = '952582243861-t4mt122tal6agknu7cp2jcka2mt429oq.apps.googleusercontent.com';

  return (
    <>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GlobalStyle />
        <Router />
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
