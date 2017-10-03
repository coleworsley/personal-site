import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about tab">
      <div className="about__content">
        <h1 className="about__title">About</h1>
        <img
          className="about__image"
          src="./assets/ColeWorsley.jpg"
          alt="Photograph of Cole Worsley"
        />
        <p className="about__paragraph">I&apos;m a web developer based out of Denver, CO.</p>
        <p className="about__paragraph">I recently graduated from the Turing School of Software and Design, a seven month intensive education program that teaches the fundamentals of web development. The program covers primarily client-side applications with focuses on Test Driven Development, UI/UX, and pair programming. The last six weeks of the program delve into backend development with node and express.</p>

      </div>
    </section>
  );
};

export default About;
