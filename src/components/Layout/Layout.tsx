/* eslint-disable no-empty-pattern */
import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import { Header, Main, NavigationContainer, OutletContainer } from './Layout.styles';
import { AlarmIcon } from '../../assets/icons';
import { AlarmButton } from '../../routes/Home/Home.styles';

interface LayoutProps {}

const Layout = ({}: LayoutProps) => {
  return (
    <Main>
      <Header>
        <AlarmButton>
          <AlarmIcon />
        </AlarmButton>
      </Header>
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
