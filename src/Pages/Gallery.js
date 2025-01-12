import React from 'react';
import TitleImageCombo from '../Components/TitleImageCombo';
import Spacer from '../Components/Spacer';
import ContactHero from '../Components/ContactHero';
import TitleBox from '../Components/TitleBox';
import ImageGrid from '../Components/ImageGrid';

import img1 from '../trivordle.png'
import img2 from '../pa2.jpg'
import img3 from '../pa1.jpg'
import andorRender from '../andorrender.png'
import cruiserrender from '../cruiserrender.png'
import tierender from '../tierender.png'
import wallpaperImage from '../wallaper2.jpg'

const imagesPageOneSectionOne = [
    {
      src: img3,
      title: '"Eclipse" Logo',
      description: 'App design.'
    },
    {
      src: img2,
      title: 'Artsinc App Login',
      description: 'App login page design.'
    },
    {
      src: img1,
      title: 'Trivordle app design',
      description: 'App design for a trivia game.'
    }
  ];

  const imagesPageOneSectionTwo = [
    {
      src: andorRender,
      title: 'Andor Render',
      description: 'Star Wars inspired render of another planet, Andor IV.'
    },
    {
      src: cruiserrender,
      title: 'Cruiser Render',
      description: 'Star Wars inspired cruiser modeled and rendered.'
    },
    {
      src: tierender,
      title: 'Fighter Render',
      description: 'Star Wars inspired fighter ship modeled and rendered.'
    }
  ];

const Gallery = () => {
  return (
    <div className="about-page">
      <ContactHero
       title="View my work"
       subtitle="UI/UX, Modeling, etc."
      />
      <Spacer />
          <TitleBox text="UI Design" />
          <ImageGrid swap={false} images={imagesPageOneSectionOne}/>
          <Spacer></Spacer>
          <TitleBox text="3D Modeling" />
          <ImageGrid swap={false} images={imagesPageOneSectionTwo}/>
      <Spacer />
    </div>
  );
};

export default Gallery;
