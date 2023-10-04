import { styled } from 'styled-components';

export const Main = styled.main`
  position: relative;
  max-width: 512px;
  height: 100vh;
  margin: 0 auto;
  overflow-y: scroll;
  background-color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 0 20px;
  background-color: #242036;
`;

export const HeaderSection = styled.div``;

export const OutletContainer = styled.div`
  height: 100%;
`;

export const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 512px;
  margin: 0 auto;
`;
