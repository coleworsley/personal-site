import React from 'react';
import './ProjectCards.css';
import ProjectLink from './ProjectLink';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Arrow from './Arrow';

const ProjectCard = (props) => {
  const {
    id,
    title,
    image,
    github,
    production,
    description,
    handleClick,
  } = props;

  return (
    <div
      className="project-card"
      id={id || 'default'}
    >
      <div className="carousel__image">
        <Arrow direction="left" handleClick={handleClick} />

        <img
          className="project__image"
          src={image}
          alt={`${title.text}${title.span}`}
        />

        <Arrow direction="right" handleClick={handleClick} />
      </div>

      <div className="project__content">
        <h3 className="project__title">
          {title.text}
          <span className="project__span">{title.span}</span>
        </h3>
        <p className="project__description">{description}</p>
        <div className="project__links">
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
