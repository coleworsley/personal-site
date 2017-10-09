import React from 'react';
import './ProjectLink.css';

const ProjectLink = (props) => {
  const { url, linkType } = props;
  const style = { backgroundImage: `url(./assets/${linkType}-logo.png)` };

  if (!url.length) return null;

  return (
    <a
      href={url}
      className={`project-link ${linkType}`}
      target="_blank"
      style={style}
    >
      {linkType}
    </a>
  );
};

export default ProjectLink;
