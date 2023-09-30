import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import { Header } from './Layout.styles';

interface LayoutProps {}

const Layout = ({}: LayoutProps) => {
  return (
    <main>
      <Header></Header>
      <Outlet />
      <BottomNavigation />
    </main>
  );
};

export default Layout;
