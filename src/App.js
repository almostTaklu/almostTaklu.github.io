import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import '../src/styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={
        <div>
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <ContactMe />
          </section>
          <Footer />
        </div>
      }/>
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </div>
);

export default App;
