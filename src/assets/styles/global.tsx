import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

import PretendardVariable from '@fonts/PretendardVariable.woff2';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 45 920;
    src: local('Pretendard Variable'), local('Pretendard Variable');
    src: url(${PretendardVariable}) format('woff2-variations');
    font-display: fallback;
  }

  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: 'Pretendard Variable', 'Noto Sans KR', sans-serif;
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
