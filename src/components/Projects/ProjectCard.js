import React from 'react';
import movieTracker from '../../assets/movie-tracker.mp4';

const ProjectCard = (props) => {
  const { title, description, image } = props;
  const cardStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="project-card" style={cardStyle}>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__content">{description}</p>
    </div>
  );
};


export default ProjectCard;
