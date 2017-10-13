import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { projectArray } from '../../utils/constants';

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
    let newIndex = index + parseInt(e.target.value);

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
        <button
          value={-1}
          className="left"
          onClick={e => this.move(e)}
        >
          Left
        </button>
        { currentProject }
        <button
          value={1}
          className="right"
          onClick={e => this.move(e)}
        >
            Right
          </button>
      </div>
    );
  }
}
export default Projects;
