import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Layout = () => {
  return (
    <main>
      <header>heder</header>
      <Outlet />
      <BottomNavigation />
    </main>
  );
};

export default Layout;
