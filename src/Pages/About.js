import React from 'react';
import HeroSection from '../Components/HeroSection';
import FeatureSection from '../Components/FeatureSection';
import StatsSection from '../Components/StatsSection';
import '../Components/WhatIDoSection.css'
import '../Components/Services.css'

import featureImage1 from '../pa1.jpg';
import featureImage2 from '../pa2.jpg';

const About = () => {
  const features = [
    {
      image: featureImage1,
      title: 'Logo design',
      description: 'I can make you logos for your companies!',
    },
    {
      image: featureImage2,
      title: 'App design',
      description: 'I can make you a design for your app!',
    },
  ];

  const stats = [
    { value: '4', label: 'Years of Experience' },
    { value: '23', label: 'Projects Worked On' },
    { value: '25', label: 'Other things' },
  ];

  return (
    <div>
      <HeroSection
        title="I am a UI/UX Designer of 6+ years"
        subtitle="I work on app design, logo design, etc."
        buttonText="See Gallery"
        buttonLink="../gallery" 
      />

      <StatsSection stats={stats} />

      <FeatureSection features={features} />

      <section className="what-i-do">
        <h2>What I Do</h2>
        <p>
        With 6+ years of experience in UI/UX design, app interfaces, logo creation, and game design, I employ my passion and precision to every work. I am dedicated to crafting interesting and visually imploring and user friendly designs, I’m excited to take on freelance opportunities that inspire and challenge me.
        </p>
      </section>

      <section className="services">
        <h2>Services I Provide</h2>
        <div className="service-list">
          <div className="service-item">Web Design</div>
          <div className="service-item">UI/UX </div>
          <div className="service-item">App Design</div>
          <div className="service-item">Logo Design</div>
        </div>
      </section>
    </div>
  );
};

export default About;
