import React from 'react';
import './Arrow.css';

const Arrow = ({ direction, handleClick }) => {
  const className = `arrow ${direction}`;
  const value = direction === 'left' ? -1 : 1;

  return (
    <button
      value={value}
      className={className}
      onClick={e => handleClick(e)}
    >
      <svg
        className="arrow-icon"
        width="40px"
        height="80px"
        viewBox="0 0 40 80"
        xmlSpace="preserve"
      >
        <polyline
          fill="none"
          stroke="rgb(40, 40, 40)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="10.0, 10.0 40.0, 40.0 10.0 70.0"
        />
      </svg>
    </button>

  );
};
// points="45.63,75.8 0.375,38.087 45.63,0.375"

export default Arrow;
