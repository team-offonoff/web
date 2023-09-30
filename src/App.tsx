import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
