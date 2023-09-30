import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import { Header, Main } from './Layout.styles';

interface LayoutProps {}

const Layout = ({}: LayoutProps) => {
  return (
    <Main>
      <Header></Header>
      <Outlet />
      <BottomNavigation />
    </Main>
  );
};

export default Layout;
