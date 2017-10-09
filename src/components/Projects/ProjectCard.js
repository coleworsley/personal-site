import React from 'react';
import './ProjectCards.css';
import ProjectLink from './ProjectLink';

const ProjectCard = (props) => {
  const { id, title, image, github, production } = props;

  const style = { backgroundImage: `url(${image})` };

  return (
    <div
      className="project-card"
      id={id || 'default'}
      style={style}
    >
      {/* <h3 className="project-card__title">
        {title.text}
        <span className="project-card__span"> {title.span}</span>
      </h3> */}
      <div className="project-links">
        <ProjectLink url={github} linkType="github" />
        <ProjectLink url={production} linkType="production" />
      </div>
    </div>
  );
};


export default ProjectCard;
