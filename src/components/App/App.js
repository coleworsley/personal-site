import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Canvas from '../Canvas/Canvas';
import About from '../About/About';
import NavBar from '../NavBar/NavBar';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const initialState = {};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <div className="app">
        <NavBar />
        <Canvas />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          render={() => (
            <Redirect
              to={`${process.env.PUBLIC_URL}/about`}
            />)}
        />
        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
        <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={Projects} />
        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
      </div>
    );
  }
}

export default App;
