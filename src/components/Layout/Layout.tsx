/* eslint-disable no-empty-pattern */
import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import { Header, Main, NavigationContainer, OutletContainer } from './Layout.styles';

interface LayoutProps {}

const Layout = ({}: LayoutProps) => {
  return (
    <Main>
      <Header></Header>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </Main>
  );
};

export default Layout;
