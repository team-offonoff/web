import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${normalize}

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #f6f6f6;
  }
`;

export default GlobalStyle;
