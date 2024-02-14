import React, { PropsWithChildren } from 'react';

import Text from '@components/commons/Text/Text';

import { colors } from '@styles/theme';

import {
  ALogoIcon,
  BLogoIcon,
  WriteBoxIcon,
  ProfileIcon,
  HomeIcon,
  HomeStrokeIcon,
  AStrokeLogoIcon,
  BStrokeLogoIcon,
  BFillLogoIcon,
} from '@icons/index';

import {
  Container,
  Empty,
  PlusContainer,
  RadiusContainer,
  StyledNavLink,
} from './BottomNavigation.styles';

const BottomNavigation = () => {
  const inactiveColor = '#A2A1A6';

  return (
    <Container>
      <RadiusContainer>
        <StyledNavLink to={'/'}>
          {({ isActive }) => (
            <>
              {isActive ? (
                <HomeIcon width={26} height={26} />
              ) : (
                <HomeStrokeIcon width={26} height={26} fill={colors.white_60} />
              )}
              <Text size={12} color={isActive ? colors.white : inactiveColor}>
                홈
              </Text>
            </>
          )}
        </StyledNavLink>
        <StyledNavLink to={'/topics/a'}>
          {({ isActive }) => (
            <>
              {isActive ? (
                <ALogoIcon width={19} height={20} fill={colors.white} />
              ) : (
                <AStrokeLogoIcon width={19} height={20} stroke={inactiveColor} />
              )}
              <Text size={12} color={isActive ? colors.white : inactiveColor}>
                A사이드
              </Text>
            </>
          )}
        </StyledNavLink>
        <Empty />
        <StyledNavLink to={'/topics/b'}>
          {({ isActive }) => (
            <>
              {isActive ? <BFillLogoIcon /> : <BStrokeLogoIcon />}
              <Text size={12} color={isActive ? colors.white : inactiveColor}>
                B사이드
              </Text>
            </>
          )}
        </StyledNavLink>
        <StyledNavLink to={'/profile'}>
          {({ isActive }) => (
            <>
              <ProfileIcon
                width={26}
                height={26}
                fill={isActive ? colors.white : 'rgba(255, 255, 255, 0.0)'}
                stroke={isActive ? 'transparent' : colors.white_60}
              />
              <Text size={12} color={isActive ? colors.white : inactiveColor}>
                MY
              </Text>
            </>
          )}
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
