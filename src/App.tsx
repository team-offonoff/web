import isValidProp from '@emotion/is-prop-valid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { StyledToastConatiner } from '@components/commons/Toast/Toast';

import GlobalStyle from '@styles/global';
import { theme } from '@styles/theme';

import { initHeight } from '@utils/initHeight';

import Router from './routes';

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    initHeight();
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledToastConatiner limit={1} />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </StyleSheetManager>
  );
};

export default App;
