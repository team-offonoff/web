import React from 'react';
import { NavLink } from 'react-router-dom';

import Text from '@components/commons/Text/Text';

import { ALogoIcon, BLogoIcon, WriteBoxIcon, ProfileIcon, SelectedHomeIcon } from '@icons/index';

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
          <SelectedHomeIcon width={26} height={26} />
          <Text size={12}>홈</Text>
        </StyledNavLink>
        <StyledNavLink to={'/a'}>
          <ALogoIcon width={19} height={20} />
          <Text size={12}>A사이드</Text>
        </StyledNavLink>
        <Empty />
        <StyledNavLink to={'/b'}>
          <BLogoIcon width={17} height={20} />
          <Text size={12}>B사이드</Text>
        </StyledNavLink>
        <StyledNavLink to={'/profile'}>
          <ProfileIcon width={26} height={26} />
          <Text size={12}>MY</Text>
        </StyledNavLink>
      </RadiusContainer>
      <StyledNavLink to={'/topics/create'}>
        <PlusContainer>
          <WriteBoxIcon width={26} height={26} />
        </PlusContainer>
      </StyledNavLink>
    </Container>
  );
};

export default BottomNavigation;
