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
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
            <FaReddit />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://example.com/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FaFilePdf />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
