import isValidProp from '@emotion/is-prop-valid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import { theme } from '@styles/theme';

import client from '@apis/fetch';

import Router from './routes';

const App = () => {
  const queryClient = new QueryClient();

  // useEffect(() => {
  //   if (import.meta.env.DEV) {
  //     [1, 27, 19, 2, 7, 25, 17, 14, 11, 23].map((topicId) => {
  //       client.delete(`topics/${topicId}/vote`, {
  //         canceledAt: Math.floor(new Date().getTime() / 1000),
  //       });
  //     });
  //   }
  // }, []);

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </StyleSheetManager>
  );
};

export default App;
