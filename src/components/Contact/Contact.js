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
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p>I am looking for a web/software developer job.</p>
            <p>
              <i className="fas fa-envelope contact-icon"></i>Email: <a href="mailto:example@example.com">example@example.com</a>
            </p>
            <p>
              <i className="fab fa-linkedin contact-icon"></i>LinkedIn: <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">linkedin.com/in/example</a>
            </p>
            <p>
              <i className="fab fa-github contact-icon"></i>GitHub: <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">github.com/example</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
