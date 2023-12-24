import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin-left: 50px;
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Item = styled.li`
  max-width: 160px;
`;

export const Title = styled.p`
  text-decoration: none;
  font-size: 16px;
  margin-top: 12px;
  color: #111;
  font-weight: 500;
  text-align: center;
`;

export const Img = styled.img`
  height: 240px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
