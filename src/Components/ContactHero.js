import React from 'react';
import './ContactHero.css';

const ContactHero = ({ title, subtitle }) => {
  return (
    <section className="contact-hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

export default ContactHero;
