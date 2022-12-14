import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 24px;

  &.active {
    color: orangered;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: orangered;
  }
`;
