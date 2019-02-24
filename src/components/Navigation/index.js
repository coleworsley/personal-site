import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Dropdown from './Dropdown';
import './index.css';

const initialState = { menuActive: false };

class NavBar extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ menuActive: !this.state.menuActive });
  }

  render() {
    const { menuActive } = this.state;

    return (
      <nav className="navigation-bar">
        <h1 className="navigation-title">CW</h1>
        <div className="navigation-menu">
          <MenuButton handleClick={this.handleClick} active={menuActive} />
          <Dropdown active={menuActive} />
        </div>
      </nav>
    );
  }
}

export default NavBar;
