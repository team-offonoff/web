import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './BottomNavigation.styles';
import { SelectedHomeIcon, ABIcon, PlusBoxIcon, ProfileIcon } from '../../assets/icons';

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
