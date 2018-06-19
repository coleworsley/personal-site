import React from 'react';
import './Dropdown.css'
import PropTypes from 'prop-types';

const Dropdown = (props) => {
  const { active } = props;
  const className = active ? 'active' : 'inactive';

  return (
    <div className={`dropdown-${className}`}>
      <p>this is some test text</p>
      <p>and some more</p>
    </div>
  );
};


export default Dropdown;
