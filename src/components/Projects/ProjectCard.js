import React from 'react';
import './ProjectCards.css';

const ProjectCard = (props) => {
  const { id, title, description, image } = props;

  return (
    <div className="project-card" id={id || 'default'}>
      <h3 className="project-card__title">
        {title.text}
        <span className="project-card__span"> {title.span}</span>
      </h3>
      {/* <p className="project-card__content">{description}</p> */}
    </div>
  );
};


export default ProjectCard;
