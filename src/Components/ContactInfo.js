import React from 'react';
import './ContactInfo.css';

const ContactInfo = ({ phone, email, address, socials }) => {
  return (
    <section className="contact-info">
      <h2>Contact Information</h2>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Address:</strong> {address}</p>
      <div className="social-links">
        <a href={socials.google} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-google"></i> Google
        </a>
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> LinkedIn
        </a>
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </section>
  );
};

export default ContactInfo;
