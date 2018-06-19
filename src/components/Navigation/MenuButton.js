import React from 'react';
import './MenuButton.css';

const MenuButton = (props) => {
  const { handleClick, active } = props;
  const className = active ? 'active' : 'inactive';

  return (
    <div
      className="menu-button"
      onClick={() => handleClick()}
      role="button"
      tabIndex="0"
    >
      <div className={`hamburger ${className}`}>
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </div>
    </div>
  );
};

export default MenuButton;

/* <svg height="100" width="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45"/>
  <line x1="18" y1="82" x2="82" y2="18"/>
  <line x1="82" y1="82" x2="18" y2="18"/>
</svg> */
