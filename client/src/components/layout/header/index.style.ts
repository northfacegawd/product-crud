import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 70px;
  box-shadow: rgb(237 237 237) 0px 1px 0px 0px;
  border-bottom: 1px solid rgb(237 237 237) 0px 1px 0px 0px;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 0 20px;
`;

export const HeaderBox = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 1em;
  @media (max-width: 735px) {
    column-gap: 0.7em;
  }
`;

export const LogoLink = styled(Link)`
  @media (max-width: 735px) {
    svg {
      width: 100px;
      height: 20px;
    }
  }
`;

export const ActiveLink = styled(Link)<{ active?: boolean }>`
  font-weight: 800;
  color: rgb(155, 155, 155);
  transition: color 200ms ease-out;
  &:hover {
    color: black;
  }
  ${({ active }) =>
    active &&
    css`
      color: black;
    `}
`;

export const LoginLink = styled(ActiveLink)`
  margin-left: auto;
`;
