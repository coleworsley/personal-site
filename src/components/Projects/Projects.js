import React from 'react';
import ProjectCard from './ProjectCard';

const projectArray = [
  {
    title: 'Test',
    content: 'This is the content',
  },
  {
    title: 'Test',
    content: 'This is the content',
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
