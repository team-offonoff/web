import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${normalize}

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font-size: 1.6rem;
    background-color: #f6f6f6;
  }

  button {
    padding: 0;
    overflow: visible;
    cursor: pointer;
    background: inherit;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
`;

export default GlobalStyle;
