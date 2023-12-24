import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  width: 140px;
  height: 40px;
  margin-bottom: 16px;
  margin-left: 76px;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 8px;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
`;

export const Layout = styled.div`
  padding: 10px;
  padding-left: 60px;
  display: flex;
  gap: 28px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Text = styled.p`
  width: 700px;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.h3`
  margin-bottom: 8px;
`;

export const SubWrapper = styled.div`
  padding: 16px 60px;
  border-bottom: 1px solid gray;
`;

export const Information = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const StyledLink = styled(Link)`
  margin-left: 12px;
  margin-right: 20px;
  color: #111;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
`;
