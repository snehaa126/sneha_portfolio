import React from 'react';
import { Link } from 'react-scroll';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Your Name</h1>
        <h2>Web Developer</h2>
        <p>Creating visually stunning, responsive web experiences.</p>
        <Link to="projects" smooth={true} duration={500} className="scroll-down">
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
