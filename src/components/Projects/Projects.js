import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { projectArray } from '../../utils/constants';

const Projects = () => {
  const projectCards = projectArray.map(project => <ProjectCard {...project} />);

  return (
    <div className="projects tab">
      { projectCards }
    </div>
  );
};

export default Projects;
