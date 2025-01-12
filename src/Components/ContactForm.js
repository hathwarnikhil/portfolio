import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <h2>Contact Me</h2>
      <input type="text" name="name" placeholder="Your Name" />
      <input type="email" name="email" placeholder="Your Email" />
      <textarea name="message" placeholder="Your Message"></textarea>
      <button type="button">Send</button>
    </form>
  );
};

export default ContactForm;
