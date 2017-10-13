import React from 'react';
import './ProjectCards.css';
import ProjectLink from './ProjectLink';

const ProjectCard = (props) => {
  const { id, title, image, github, production } = props;

  return (
    <div
      className="project-card"
      id={id || 'default'}
    >
      <div className="project-card__content">
        <h3 className="title">
          {title.text}
          <span>{title.span}</span>
        </h3>
        <img
          className="project__image"
          src={image}
          alt={`${title.text}${title.span}`}
        />
        <div className="project-links">
          <ProjectLink
            url={github}
            linkType="github"
          />
          <ProjectLink
            url={production}
            linkType="production"
          />
        </div>
      </div>
    </div>
  );
};


export default ProjectCard;
