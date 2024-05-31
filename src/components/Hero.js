import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaReddit, FaTwitter, FaFilePdf } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="stars"></div>
      <div className="hero-content">
        <h1>Ganga Acharya</h1>
        <h2>
          <Typewriter
            words={['Software Developer', 'Web Developer', 'Tech Enthusiast']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <div className="social-icons">
          <FaGithub />
          <FaLinkedin />
          <FaReddit />
          <FaTwitter />
          <FaFilePdf />
        </div>
      </div>
    </div>
  );
};

export default Hero;
