import React from "react";
import Blog from './Blog';
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";

const Navbar = (props) => (
  <AccountConsumer>
    { value => (
      <Menu>
        <NavLink to='/'>
          <Menu.Item>
            Home
          </Menu.Item>
        </NavLink>
        <NavLink to="/account/profile">
          <Menu.Item>
            { value.username}
          </Menu.Item>
        </NavLink>
      </Menu>
    )}
  </AccountConsumer>
)

export default Navbar;
