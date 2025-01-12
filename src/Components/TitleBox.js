import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../styles.css';
import TypewriterText from './TypewriterText';

const TitleBox = ({ text }) => {
  return (
    <div className="subHeader-container">
      <TypewriterText text={text} tagName="h1" className="subHeader" />
    </div>
  );
};

TitleBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleBox;
