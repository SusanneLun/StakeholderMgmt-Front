import React from 'react';
import ReactDOM from 'react-dom';
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
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
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/PI_Chart"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >PI Chart</NavLink>
    <NavLink
      to="/manage_stakeholder"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Manage Stakeholder</NavLink>
  </div>;



export default Navbar;
