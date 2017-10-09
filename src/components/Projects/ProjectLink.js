import React from 'react';
import './ProjectLink.css';

const ProjectLink = (props) => {
  const { url, linkType } = props;

  if (!url.length) return null;

  return (
    <a
      href={url}
      className={`project-link ${linkType}`}
      target="_blank"
    >
      {linkType}
    </a>
  );
};

export default ProjectLink;
