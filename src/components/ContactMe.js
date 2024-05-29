import React from 'react';
import '../styles/styles.css';

const ContactMe = () => (
  <div className="contact-me-section container" id="contact-me">
    <form action="./public/contact.php" method="post">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
    <div className="email-info">
      <p>Email: your-email@example.com</p>
    </div>
  </div>
);

export default ContactMe;
