import React from 'react';
import Section from '../HigherOrder/Section';
import './index.css';

const Home = () => {
  return (
    <section className="home">
      <div>
        <h1>Hi! My Name is <span>Cole Worsley</span></h1>
        <p>I&apos;m a software developer out of Denver, CO</p>
      </div>
    </section>
  );
};

export default Section(Home);
