import React from 'react';
import { NavLink } from 'react-router-dom';

import { ABIcon, PlusBoxIcon, ProfileIcon, SelectedHomeIcon } from '@icons/index';

import { Container } from './BottomNavigation.styles';

const BottomNavigation = () => {
  return (
    <Container>
      <NavLink to={'/'}>
        <SelectedHomeIcon />
      </NavLink>
      <NavLink to={'/ab'}>
        <ABIcon />
      </NavLink>
      <NavLink to={'/write'}>
        <PlusBoxIcon />
      </NavLink>
      <NavLink to={'/profile'}>
        <ProfileIcon />
      </NavLink>
    </Container>
  );
};

export default BottomNavigation;
