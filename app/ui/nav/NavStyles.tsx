import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  background-color: #07c;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const NavList = styled.ul`
  display: flex;
  margin-top: 0;
  padding: 1rem 3rem;
`;

const NavItem = styled.li`
  color: 'white';
  padding-right: 2rem;
`;

const NavItemRight = styled.li`
  color: "white";
  padding-left: 2rem;
`;

const StyledLink = styled.a`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }
`;

export {
  Nav,
  NavList,
  StyledNavLink as NavLink,
  NavItem,
  NavItemRight,
  StyledLink as Link,
}