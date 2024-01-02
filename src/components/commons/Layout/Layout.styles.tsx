import { styled } from 'styled-components';

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 512px;
  height: 100vh;
  margin: 0 auto;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.navy};
`;

export const HeaderSection = styled.div``;

export const ChildrenContainer = styled.div`
  flex: 1;
`;

export const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: ${(props) => props.theme.zIndex.navigation};
  width: 100%;
  max-width: 512px;
  margin: 0 auto;
`;
