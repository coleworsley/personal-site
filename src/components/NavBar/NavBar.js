import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="nav__title">CW</h1>
      <ul className="nav__list">
        <li><Link className="nav__link" to={`${process.env.PUBLIC_URL}/`}>Welcome</Link></li>
        <li><Link className="nav__link" to={`${process.env.PUBLIC_URL}/about`}>About</Link></li>
        <li><Link className="nav__link" to={`${process.env.PUBLIC_URL}/projects`}>Projects</Link></li>
        <li><Link className="nav__link" to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
