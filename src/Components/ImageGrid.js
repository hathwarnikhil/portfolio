import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import TypewriterText from './TypewriterText';
import { useInView } from 'react-intersection-observer';

const ImageGrid = ({ swap, images }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
  });

  return (
    <div className="ImageBox" ref={ref}>
      {swap ? (
        <>
          <div className="right-side">
            {images.slice(0, 2).map((image, index) => (
              <div key={index} className={`imageWithDescription ${inView ? 'visible' : ''}`}>
                <img src={image.src} className={index === 0 ? "imageTop" : ""} alt={`Image ${index + 1}`} />
                <div className="text-container">
                  <TypewriterText text={image.title} tagName="h1" className="subHeader" />
                  <TypewriterText text={image.description} tagName="p" className="Description" />
                </div>
              </div>
            ))}
          </div>
          <div className="left-side">
            <div className={`imageWithDescription ${inView ? 'visible' : ''}`}>
              <img src={images[2].src} alt="Image 3" />
              <div className="text-container">
                <TypewriterText text={images[2].title} tagName="h1" className="subHeader" />
                <TypewriterText text={images[2].description} tagName="p" className="Description" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="left-side">
            <div className={`imageWithDescription ${inView ? 'visible' : ''} single-image`}>
              <img src={images[0].src} alt="Image 1" />
              <div className="text-container">
                <TypewriterText text={images[0].title} tagName="h1" className="subHeader" />
                <TypewriterText text={images[0].description} tagName="p" className="Description" />
              </div>
            </div>
          </div>
          <div className="right-side">
            {images.slice(1).map((image, index) => (
              <div key={index} className={`imageWithDescription ${inView ? 'visible' : ''}`}>
                <img src={image.src} className={index === 0 ? "imageTop" : ""} alt={`Image ${index + 2}`} />
                <div className="text-container">
                  <TypewriterText text={image.title} tagName="h1" className="subHeader" />
                  <TypewriterText text={image.description} tagName="p" className="Description" />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

ImageGrid.propTypes = {
  swap: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default ImageGrid;
