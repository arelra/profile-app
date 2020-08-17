import React from 'react';
import {
  Nav,
  NavList,
  NavItem,
  NavItemRight,
  NavLink,
  Link
} from './NavStyles';

interface Props {
  setLoggedIn: (loggedIn: boolean) => void,
};

const NavBar = ({ setLoggedIn }: Props) => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink exact to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact to="/profile">
            Profile
          </NavLink>
        </NavItem>
      </NavList>
      <NavList>
        <NavItemRight>
          <Link onClick={() => setLoggedIn(false)}>
            Logout
          </Link>
        </NavItemRight>
      </NavList>
    </Nav>
  );
};

export default NavBar;
