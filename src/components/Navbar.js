import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" fixed="top" expanded={expanded} className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#">Ganga Acharya</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
          {expanded ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              onClick={() => setExpanded(false)}
              className="nav-link"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="aboutme"
              smooth={true}
              duration={500}
              onClick={() => setExpanded(false)}
              className="nav-link"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setExpanded(false)}
              className="nav-link"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="contactme"
              smooth={true}
              duration={500}
              onClick={() => setExpanded(false)}
              className="nav-link"
            >
              Contact Me
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
