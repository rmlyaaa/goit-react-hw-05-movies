import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div``;

export const Header = styled.header`
  height: 60px;
  border-bottom: 1px solid #111;
  padding-left: 60px;
  padding-top: 16px;
  margin-bottom: 16px;
`;

export const ListNav = styled.ul`
  display: flex;
  gap: 36px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #111;
  font-size: 24px;
  font-weight: 700;

  &.active {
    color: orange;
  }
`;
