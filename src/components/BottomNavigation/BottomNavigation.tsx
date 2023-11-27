import React from 'react';
import { NavLink } from 'react-router-dom';

import Text from '@components/Text/Text';

import { ABIcon, WriteBoxIcon, ProfileIcon, SelectedHomeIcon } from '@icons/index';

import {
  Container,
  Empty,
  PlusContainer,
  RadiusContainer,
  StyledNavLink,
} from './BottomNavigation.styles';

const BottomNavigation = () => {
  return (
    <Container>
      <RadiusContainer>
        <StyledNavLink to={'/'}>
          <SelectedHomeIcon />
          <Text size={12}>홈</Text>
        </StyledNavLink>
        <StyledNavLink to={'/a'}>
          <ABIcon />
          <Text size={12}>A사이드</Text>
        </StyledNavLink>
        <Empty />
        <StyledNavLink to={'/b'}>
          <ABIcon />
          <Text size={12}>B사이드</Text>
        </StyledNavLink>
        <StyledNavLink to={'/profile'}>
          <ProfileIcon />
          <Text size={12}>MY</Text>
        </StyledNavLink>
      </RadiusContainer>
      <StyledNavLink to={'/plus'}>
        <PlusContainer>
          <WriteBoxIcon />
        </PlusContainer>
      </StyledNavLink>
    </Container>
  );
};

export default BottomNavigation;
