import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home tab">
      <img
        className="personal-picture"
        src="./assets/ColeWorsley.jpg"
        alt="Photograph of Cole Worsley"
      />
      <div className="name-box">
        <h1 className="name">Cole Worsley</h1>
        <p className="job-title">Software Developer</p>
      </div>
    </div>
  );
};

export default Home;
