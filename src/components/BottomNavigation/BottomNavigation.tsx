import React from 'react';
import { NavLink } from 'react-router-dom';
import { ABIcn, PlusBoxIcn, ProfileIcn, SelectedHomeIcn } from '../../assets/icons';
import { Container } from './BottomNavigation.styles';

const BottomNavigation = () => {
  return (
    <Container>
      <NavLink to={'/'}>
        <SelectedHomeIcn />
      </NavLink>
      <NavLink to={'/ab'}>
        <ABIcn />
      </NavLink>
      <NavLink to={'/write'}>
        <PlusBoxIcn />
      </NavLink>
      <NavLink to={'/profile'}>
        <ProfileIcn />
      </NavLink>
    </Container>
  );
};

export default BottomNavigation;
