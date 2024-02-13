import { styled } from 'styled-components';

export const Main = styled.main`
  position: relative;
  max-width: 512px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;

  /* background-color: ${(props) => props.theme.colors.navy}; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 20px;
`;

export const HeaderSection = styled.div``;

export const ChildrenContainer = styled.div`
  height: calc(100% - 48px);

  /* height: 100%; */
`;

export const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: ${(props) => props.theme.zIndex.navigation};
  width: 100%;
  max-width: 512px;
  margin: 0 auto;
`;
