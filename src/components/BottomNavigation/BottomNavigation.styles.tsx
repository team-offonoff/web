import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const PlusContainer = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  padding: 1.5rem;
  background-color: #161421;
  border-color: #4d3b7c;
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;
  transform: translate(-50%, 80%);
`;

export const RadiusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.6rem 4rem 1.5rem;
  background-color: #161421;
  border-radius: 50px;
`;

export const Empty = styled.div`
  width: 28px;
  background-color: #161421;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: space-between;
  color: inherit;
  text-decoration: none;
`;
