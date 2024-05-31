import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('programming');

  useEffect(() => {
    const bars = document.querySelectorAll('.bar-inner');
    bars.forEach(bar => {
      const width = bar.parentElement.getAttribute('data-width');
      bar.style.width = width;
    });
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="skills-section container" id="skills">
      <h2 className='skills-title'>Skills</h2>
      <div className="skills-tabs">
        <button 
          className={activeTab === 'programming' ? 'active' : ''} 
          onClick={() => handleTabClick('programming')}
        >
          Technical Skills
        </button>
        <button 
          className={activeTab === 'soft-skills' ? 'active' : ''} 
          onClick={() => handleTabClick('soft-skills')}
        >
          Soft Skills
        </button>
      </div>
      <div className={`skills-content ${activeTab === 'programming' ? 'active' : ''}`}>
        <div className="skill-bar-wrapper">
          <div className="skill-name">Java</div>
          <div className="bar" data-width="80%">
            <div className="bar-inner"></div>
          </div>
        </div>
        <div className="skill-bar-wrapper">
          <div className="skill-name">HTML/CSS</div>
          <div className="bar" data-width="90%">
            <div className="bar-inner"></div>
          </div>
        </div>
        <div className="skill-bar-wrapper">
          <div className="skill-name">Python</div>
          <div className="bar" data-width="60%">
            <div className="bar-inner"></div>
          </div>
        </div>
        <div className="skill-bar-wrapper">
          <div className="skill-name">C++/C</div>
          <div className="bar" data-width="70%">
            <div className="bar-inner"></div>
          </div>
        </div>
        <div className="skill-bar-wrapper">
          <div className="skill-name">Postgres SQL</div>
          <div className="bar" data-width="85%">
            <div className="bar-inner"></div>
          </div>
        </div>
        <div className="skill-bar-wrapper">
          <div className="skill-name">JavaScript</div>
          <div className="bar" data-width="75%">
            <div className="bar-inner"></div>
          </div>
        </div>
        <div className="skill-bar-wrapper">
          <div className="skill-name">React/Angular</div>
          <div className="bar" data-width="75%">
            <div className="bar-inner"></div>
          </div>
        </div>
        <div className="skill-bar-wrapper">
          <div className="skill-name">C#</div>
          <div className="bar" data-width="25%">
            <div className="bar-inner"></div>
          </div>
        </div>
      </div>
      <div className={`skills-content ${activeTab === 'soft-skills' ? 'active' : ''}`}>
        <div className="skill-bar-wrapper">
          <div className="skill-name">Communication</div>
          <div className="bar" data-width="90%">
            <div className="bar-inner"></div>
          </div>
        </div>
        <div className="skill-bar-wrapper">
          <div className="skill-name">Teamwork</div>
          <div className="bar" data-width="85%">
            <div className="bar-inner"></div>
          </div>
        </div>
        <div className="skill-bar-wrapper">
          <div className="skill-name">Problem-solving</div>
          <div className="bar" data-width="80%">
            <div className="bar-inner"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
