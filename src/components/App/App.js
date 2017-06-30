import React, { Component } from 'react';
import Canvas from '../Canvas/Canvas';
import About from '../About/About';
import { NavBar } from '../NavBar/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'About',
    }
  }


  render() {
    return (
      <div className="app">
        <NavBar />
        <Canvas />
      </div>
    );
  }
}

export default App;
