import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about tab">
      <header className="about__header">
        <img
          className="personal-picture"
          src="./assets/ColeWorsley.jpg"
          alt="Photograph of Cole Worsley"
        />
        <div className="name-box">
          <h1 className="name">Cole Worsley</h1>
          <p className="job-title">Software Developer</p>
        </div>
      </header>
      <div className="about__content">
        <h1 className="title">About</h1>
        <p className="paragraph">
          First and foremost, I am a web developer out of Denver, CO. At my core, I&apos;m a passionate problem solver who desires to find creative and innovative solutions to challenges.
        </p>
        <p className="paragraph">
          I recently graduated from the Front End Program at the Turing School of Software and Design, a seven month intensive coding bootcamp that teaches the fundamentals of web development. The program covers primarily client-side applications with focuses on Test Driven Development, UI/UX, and pair programming. The last six weeks of the program delve into backend development with node and express.
        </p>
        <p className="paragraph">
          As a former financial analyst, I understand what is necessary for a business to succeed. Throughout my financial career, I learned valuable analytical and critical thinking skills that have helped progress my abilities. I bring these skills with my in my software development career as I continue to fulfill my goal of continuous learning throughout my life.
        </p>

      </div>
    </section>
  );
};

export default About;
