import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Canvas from '../Canvas/Canvas';
import About from '../About/About';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

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
        <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => (
          <Redirect to="/home"/>
        )}/>
        <Route exact path={`${process.env.PUBLIC_URL}/home`} component={Home} />
        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
        <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={Projects} />
        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
      </div>
    );
  }
}

export default App;
