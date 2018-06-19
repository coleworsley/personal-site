import React, { Component } from 'react';
import Canvas from './components/Canvas';
import NavBar from './components/Navigation';

const initialState = {};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
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
