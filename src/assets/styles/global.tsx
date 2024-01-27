import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${normalize}

  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: 'Pretendard Variable', 'Noto Sans KR', sans-serif;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: #f6f6f6;
  }

  html,
  body {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    height: 100% !important;
    overflow: auto !important;
    -webkit-overflow-scrolling: touch !important;
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
