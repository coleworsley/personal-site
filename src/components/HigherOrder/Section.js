import React from 'react';
import './Section.css';

const Section = (WrappedComponent, className) => {
  return props => (
    <section className={`section-wrapper ${className}`}>
      <WrappedComponent {...props} />
    </section>
  );
};

export default Section;
