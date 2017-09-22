import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Canvas from '../Canvas/Canvas';
import About from '../About/About';
import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home';
import { Contact } from '../Contact/Contact';
import { Projects } from '../Projects/Projects';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'About',
    };
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <Canvas />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
