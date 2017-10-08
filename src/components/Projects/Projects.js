import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectArray = [
  {
    id: 'movie-tracker',
    title: {
      text: 'Movie',
      span: 'Tracker',
    },
    description: 'A minature clone of IMDB utilizing the movie database API',
    link: 'https://github.com/coleworsley/movie-tracker',
    image: './assets/movie-tracker.png',
  },
  {
    id: 'jet-fuel',
    title: {
      text: 'Jet',
      span: 'Fuel',
    },
    description: '',
    link: 'https://github.com/coleworsley/jet-fuel',
    image: './assets/jet-fuel.png',
  },
  {
    id: 'happy-hour-power',
    title: {
      text: 'Happy Hour',
      span: 'Power',
    },
    description: '',
    link: 'https://github.com/coleworsley/happy-hour-power',
    image: './assets/happy-hour-power.png',
  },
  {
    id: 'comp-challenge',
    title: {
      text: 'Comp',
      span: 'Challenge',
    },
    description: '',
    link: 'https://github.com/coleworsley/',
    image: './assets/comp-challenge.png',
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
