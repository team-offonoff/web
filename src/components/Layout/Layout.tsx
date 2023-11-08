import React from 'react';
import { Outlet } from 'react-router-dom';

import { AlarmButton } from '@components/TopicCard/TopicCard.styles';

import { AlarmIcon } from '../../assets/icons';
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
