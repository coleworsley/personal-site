import React, { Component } from 'react';

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
    const hamburger = { backgroundImage: 'url(/assets/hamburger.png)' };

    return (
      <nav className="nav">
        <div className="dropdown" background={hamburger}>
          did this work
        </div>
      </nav>
    );
  }
}

export default NavBar;
