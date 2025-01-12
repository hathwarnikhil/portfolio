import React from 'react';
import './FeatureSection.css';

const FeatureSection = ({ features }) => {
  return (
    <section className="feature-section">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <img src={feature.image} alt={feature.title} className="feature-image" />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeatureSection;