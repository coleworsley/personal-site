import React from 'react';
import Section from '../HigherOrder/Section';
import './index.css';

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1 className="content__title">Hi! I&apos;m <span>Cole Worsley</span></h1>
        <p className="content__text">I&apos;m a software developer out of Denver, CO</p>
      </div>
      <div className="button-container">
        <button>See my Work</button>
      </div>
    </div>
  );
};

export default Section(Home, 'home-wrapper');
