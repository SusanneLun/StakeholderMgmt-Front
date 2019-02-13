import React from 'react';

/* Add NavLink to importer */
import { NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  height: '80px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'purple',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
const Navbar = () =>
  <div className='navbar'>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'purple'
      }}
    >Home</NavLink>
    <NavLink
    to="/signin"
    exact
    style={link}
    activeStyle={{
      background: 'purple'
    }}>Sign in</NavLink>
    <NavLink
    to="/signup"
    exact
    style={link}
    activeStyle={{
      background: 'purple'
    }}>Sign up</NavLink>
    <NavLink
    to="/projects"
    exact
    style={link}
    activeStyle={{
      background: 'purple'
    }}>Projects</NavLink>
    <NavLink
      to="/PI_Chart"
      exact
      style={link}
      activeStyle={{
        background: 'purple'
      }}
    >PI Chart</NavLink>
    <NavLink
      to="/support"
      exact
      style={link}
      activeStyle={{
        background: 'purple'
      }}
    >Support</NavLink>
    <NavLink
      to="/manage_stakeholder"
      exact
      style={link}
      activeStyle={{
        background: 'purple'
      }}
    >Manage Stakeholder</NavLink>
  </div>;



export default Navbar;
