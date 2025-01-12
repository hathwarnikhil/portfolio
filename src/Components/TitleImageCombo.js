import React from 'react';
import './TitleImageCombo.css';
import TypewriterText from './TypewriterText';

const TitleImageCombo = ({ title, description, image, reverse }) => {
  return (
    <div className={`flip-flop-section ${reverse ? 'reverse' : ''}`}>
      <div className="text-container">
      <TypewriterText text={title} tagName="h1" className="subHeader" />
      <TypewriterText text={description} tagName="p" className="Description" />
      </div>
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default TitleImageCombo;
