import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import CustomNavbar from './components/Navbar';
import '../src/styles/Hero.css';
import '../src/styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <CustomNavbar />
    <Hero />
    <AboutMe />
    <Projects />
    <Skills />
    <ContactMe />
    <Footer />
  </div>
);

export default App;
