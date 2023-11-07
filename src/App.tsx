import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import GlobalStyle from '@styles/global';

import Router from './routes';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
