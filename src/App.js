import React, { Component } from 'react';
import Canvas from './components/Canvas';
import NavBar from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const initialState = {};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    return (
      <div className="app">
        <Canvas />
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
