import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectArray = [
  {
    title: 'Movie Tracker',
    description: 'This is the description',
    image: './assets/movie-tracker.png',
  },
  {
    title: 'Movie Tracker',
    description: 'This is another description',
    image: './assets/movie-tracker.mp4',
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
