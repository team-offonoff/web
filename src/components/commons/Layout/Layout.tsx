import React from 'react';

import BottomNavigation from '../BottomNavigation/BottomNavigation';
import { Row } from '../Flex/Flex';

import {
  ChildrenContainer,
  Header,
  HeaderSection,
  Main,
  NavigationContainer,
} from './Layout.styles';

interface LayoutProps {
  HeaderLeft?: React.ReactNode;
  HeaderCenter?: React.ReactNode;
  HeaderRight?: React.ReactNode;
  hasBottomNavigation?: boolean;
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { HeaderLeft, HeaderCenter, HeaderRight, hasBottomNavigation = true, children } = props;

  return (
    <Main>
      <Header>
        <HeaderSection>
          <Row justifyContent="flex-start" alignItems="center">
            {HeaderLeft}
          </Row>
        </HeaderSection>
        <HeaderSection>
          <Row justifyContent="center" alignItems="center">
            {HeaderCenter}
          </Row>
        </HeaderSection>
        <HeaderSection>
          <Row justifyContent="flex-end" alignItems="center">
            {HeaderRight}
          </Row>
        </HeaderSection>
      </Header>
      <ChildrenContainer>{children}</ChildrenContainer>
      {hasBottomNavigation && (
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      )}
    </Main>
  );
};

export default Layout;
