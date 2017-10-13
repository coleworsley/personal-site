import React from 'react';
import './Arrow.css';

const Arrow = ({ direction, handleClick }) => {
  const className = `arrow ${direction}`;

  return (
    <button
      value={1}
      className={className}
      onClick={e => handleClick(e)}
    >
      <svg className="arrow-icon" width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
        <polyline
          fill="none"
          stroke="rgb(40, 40, 40)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="45.63,75.8 0.375,38.087 45.63,0.375"
        />
      </svg>
    </button>

  );
};

export default Arrow;
