import React, { Component } from 'react';
import './App.css';
import Canvas from '../Canvas/Canvas';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'about',
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>About</h2>
        </div>
        <p className="App-intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <Canvas />
      </div>
    );
  }
}

export default App;
