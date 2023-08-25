import React from 'react';
import '../styles/AboutMe.css';
import CatImage from '../images/bolepelo.jpg';

const AboutMe = () => {
  return (
    <section className="about-me-container" id="about">
      <div className="about-me-content">
        <h2 className="about-me-heading">Hello, I'm Iván</h2>
        <p className="about-me-text">
          A Web Developer with a passion for crafting captivating digital experiences.
        </p>
        <div className="about-me-images">
          <img src={CatImage} alt="My Feline Companions" className="about-me-image" />
        </div>
        <p className="about-me-text">
          When I'm not immersed in code, you'll find me strumming melodies on my guitar,
          lost in the world of music, or sharing precious moments with my feline companions.
        </p>
        <p className="about-me-text">
          My journey into web development began during college, where I built my first website from scratch.
          Since then, I've been on a relentless quest to explore the latest technologies and create exceptional digital solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
