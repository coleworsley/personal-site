import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink to={`${process.env.PUBLIC_URL}/`}>
        <h1 className="nav__title">CW</h1>
      </NavLink>
      <ul className="nav__list">
        <li>
          <NavLink activeClassName="active" className="nav__link" to={`${process.env.PUBLIC_URL}/about`}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="active" className="nav__link" to={`${process.env.PUBLIC_URL}/projects`}>
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="active" className="nav__link" to={`${process.env.PUBLIC_URL}/contact`}>
            Contact
          </NavLink>
        </li>

        <li><a
          className="nav__link"
          href="https://drive.google.com/file/d/0BxokiILyz4-MWS1rWVUwcVVhNm8/view?usp=sharing"
        >
          Resume
        </a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
