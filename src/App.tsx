import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import { theme } from '@styles/theme';

import Router from './routes';

const App = () => {
  const queryClient = new QueryClient();

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
