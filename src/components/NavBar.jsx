import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          exact
        >
          Announcements
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create"
        >
          New announcement
        </NavLink>
      </li>
    </ul>
  </nav>
);