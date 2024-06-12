import React, { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Generate particles
    const generateParticles = () => {
      const numParticles = Math.floor(window.innerWidth / 2);
      const particlesContainer = particlesRef.current;
      particlesContainer.innerHTML = '';

      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
      }
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);

    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>Ganga Acharya</h1>
        <div className="typewriter">
          <Typewriter
            words={['Web Developer', 'Software Developer', 'Tech Enthusiast']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>
      </div>
      <div className="particles" ref={particlesRef}></div>
      <div className="angle-down" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <i className="fas fa-angle-down"></i>
      </div>
    </section>
  );
};

export default Hero;
