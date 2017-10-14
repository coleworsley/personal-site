import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { projectArray } from '../../utils/constants';
import Arrow from './Arrow';
import CarouselFooter from './CarouselFooter';

const initialState = {
  projects: projectArray.map(project => <ProjectCard {...project} />),
  index: 0,
};


class Projects extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.move = this.move.bind(this);
    this.goToProject = this.goToProject.bind(this);
  }

  move(e) {
    const { index, projects } = this.state;
    let newIndex = index + parseInt(e.currentTarget.value, 10);

    if (newIndex > projects.length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = projects.length - 1;
    this.setState({
      index: newIndex,
    });
  }

  goToProject(index) {
    this.setState({ index });
  }

  render() {
    const { projects, index } = this.state;
    const currentProject = projects[index];

    return (
      <div className="projects tab">
        <div className="carousel">
          <Arrow direction="left" handleClick={this.move} />
          { currentProject }
          <Arrow direction="right" handleClick={this.move} />
        </div>
        <CarouselFooter projects={projectArray} index={index} goToProject={this.goToProject} />
      </div>
    );
  }
}
export default Projects;
