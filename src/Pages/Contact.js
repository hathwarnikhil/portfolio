import React from 'react';
import ContactHero from '../Components/ContactHero';
import ContactForm from '../Components/ContactForm';
import ContactInfo from '../Components/ContactInfo';

const Contact = () => {
  const socials = {
    google: 'https://google.com/',
    instagram: 'https://instagram.com/',
    github: 'https://github.com/',
  };

  return (
    <div>
      <ContactHero
        title="Contact Me"
        subtitle="Contact me to get in touch today!"
      />
      <ContactInfo
        phone="123-456-6666"
        email="nikhil.hathwar@gmail.com"
        address="address yes"
        socials={socials} 
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
