import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-content">
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p>I am currently looking for a web/software developer job. I am passionate about creating efficient and scalable applications and am eager to bring my skills to a dynamic team. Feel free to reach out to me via email.</p>
            <div className="contact-social-icons">
              <a href="mailto:ach.ganga@outlook.com"><i className="fas fa-envelope"></i></a>
              <a href="https://linkedin.com/in/acharyagan" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/almostTaklu" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://x.com/aganga02" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="go-to-top-wrapper">
          <div className="go-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <i className="fas fa-angle-up"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
