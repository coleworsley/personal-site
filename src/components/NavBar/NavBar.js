import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const initialState = { showDropDown: false };

class NavBar extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showDropDown: !this.state.showDropDown });
  }

  render() {
    const dropdown = this.state.showDropDown ? '' : ' hide';

    return (
      <nav className="nav">
        <NavLink to={`${process.env.PUBLIC_URL}/`}>
          <h1 className="nav__title">CW</h1>
        </NavLink>
        <button className="hamburger" onClick={() => this.handleClick()} />
        <ul className={`nav__list${dropdown}`}>
          <li>
            <NavLink activeClassName="active" className="nav__link" to={`${process.env.PUBLIC_URL}about`}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" className="nav__link" to={`${process.env.PUBLIC_URL}projects`}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" className="nav__link" to={`${process.env.PUBLIC_URL}contact`}>
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
  }
}

export default NavBar;
