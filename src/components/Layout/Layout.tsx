import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <header>heder</header>
      <Outlet />
      <footer>footer</footer>
    </main>
  );
};

export default Layout;
