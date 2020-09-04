import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <span className="navbar-brand">Announcements App</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName='active'
            to="/"
            exact
          >
            Announcements
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName='active'
            to="/create"
          >
            New announcement
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);