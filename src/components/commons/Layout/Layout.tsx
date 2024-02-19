import React from 'react';
import { Helmet } from 'react-helmet';

import BottomNavigation from '../BottomNavigation/BottomNavigation';

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
  ThemeColor?: string;
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { HeaderLeft, HeaderCenter, HeaderRight, hasBottomNavigation = true, children } = props;

  return (
    <Main>
      <Helmet>
        <meta name="theme-color" content={props.ThemeColor || '#242036'} />
      </Helmet>
      <Header>
        <HeaderSection style={{ justifySelf: 'start' }}>{HeaderLeft}</HeaderSection>
        <HeaderSection style={{ justifySelf: 'center' }}>{HeaderCenter}</HeaderSection>
        <HeaderSection style={{ justifySelf: 'end' }}>{HeaderRight}</HeaderSection>
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
