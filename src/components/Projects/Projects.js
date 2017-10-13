import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { projectArray } from '../../utils/constants';
import Arrow from './Arrow';

const initialState = {
  projects: projectArray.map(project => <ProjectCard {...project} />),
  index: 0,
};


class Projects extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  move(e) {
    const { index, projects } = this.state;
    let newIndex = index + parseInt(e.currentTarget.value, 10);

    if (newIndex > projects.length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = projects.length;
    this.setState({
      index: newIndex,
    });
  }

  render() {
    const { projects, index } = this.state;
    const currentProject = projects[index];

    return (
      <div className="projects tab">
        <div className="carousel">
          <Arrow direction="left" handleClick={e => this.move(e)} />
          { currentProject }
          <Arrow direction="right" handleClick={e => this.move(e)} />
        </div>
        <footer className="carousel__footer">
          this will be the carosel footer
        </footer>
      </div>
    );
  }
}
export default Projects;
