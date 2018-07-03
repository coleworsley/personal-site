import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css'

const Dropdown = (props) => {
  const { active } = props;
  const className = active ? 'active' : 'inactive';

  return (
    <div className={`dropdown ${className}`}>
      <ul>
        <li className="dropdown__link">Home</li>
      </ul>
      <ul>
        <li className="dropdown__link">About</li>
      </ul>
      <ul>
        <li className="dropdown__link">Portfolio</li>
      </ul>
      <ul>
        <li className="dropdown__link">Contact</li>
      </ul>
    </div>
  );
};


export default Dropdown;
