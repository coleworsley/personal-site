import React from 'react';

const ProjectCard = (props) => {
  const { title, description } = props;

  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__content">{description}</p>
    </div>
  );
};


export default ProjectCard;
