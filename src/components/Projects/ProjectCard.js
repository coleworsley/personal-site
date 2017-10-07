import React from 'react';
import './ProjectCards.css';

const ProjectCard = (props) => {
  const { id, title, image } = props;

  return (
    <div className="project-card" id={id || 'default'}>
      <h3 className="project-card__title">
        {title.text}
        <span className="project-card__span"> {title.span}</span>
      </h3>
      <img
        className="project-card__image"
        src={image}
        alt={`${title.text} ${title.span}`}
      />
    </div>
  );
};


export default ProjectCard;
