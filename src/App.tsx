import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import { theme } from '@styles/theme';

import client from '@apis/fetch';

import Router from './routes';

const App = () => {
  const queryClient = new QueryClient();
  const isDev = import.meta.env.DEV;

  useEffect(() => {
    if (isDev) {
      [...Array.from({ length: 20 }, (_, i) => i + 1)].map((topicId) => {
        client.delete(`topics/${topicId}/vote`);
      });
    }
  }, []);

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
