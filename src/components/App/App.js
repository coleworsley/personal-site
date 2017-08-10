import React, { Component } from 'react';
import Canvas from '../Canvas/Canvas';
import About from '../About/About';
import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home';
import { Route } from 'react-router-dom';

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
        <Home />
        <Route exact to='/' component={Home}/>
        <Route exact to='/about' component={About}/>
        <Route exact to='/about' component={About}/>
        <Route exact to='/about' component={About}/>
        <Canvas />
      </div>
    );
  }
}

export default App;
