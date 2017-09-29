import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="nav__title">CW</h1>
      <ul className="nav__list">
        <li>
          <Link className="nav__link" to={`${process.env.PUBLIC_URL}/`}>
            Welcome
          </Link>
        </li>

        <li>
          <Link className="nav__link" to={`${process.env.PUBLIC_URL}/about`}>
            About
          </Link>
        </li>

        <li>
          <Link className="nav__link" to={`${process.env.PUBLIC_URL}/projects`}>
            Projects
          </Link>
        </li>

        <li>
          <Link className="nav__link" to={`${process.env.PUBLIC_URL}/contact`}>
            Contact
          </Link>
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
