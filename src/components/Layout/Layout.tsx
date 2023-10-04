import React from 'react';
import { Outlet } from 'react-router-dom';

import { AlarmIcon } from '../../assets/icons';
import { AlarmButton } from '../../routes/Home/Home.styles';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

import { Header, HeaderSection, Main, NavigationContainer, OutletContainer } from './Layout.styles';

interface LayoutProps {}

const Layout = ({}: LayoutProps) => {
  return (
    <Main>
      <Header>
        <HeaderSection></HeaderSection>
        <HeaderSection></HeaderSection>
        <HeaderSection>
          <AlarmButton>
            <AlarmIcon />
          </AlarmButton>
        </HeaderSection>
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
