import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectArray = [
  {
    title: 'Test',
    description: 'This is the description',
  },
  {
    title: 'Test',
    description: 'This is the description',
  },
];

const Projects = () => {
  const projectCards = projectArray.map(project => <ProjectCard {...project} />);
  return (
    <div className="projects tab">
      { projectCards }
    </div>
  );
};

export default Projects;
