

import React from 'react';
import { motion } from 'framer-motion';
import '../styles.css';
import Header from '../Components/Header';
import Spacer from '../Components/Spacer';
import TitleBox from '../Components/TitleBox';
import ImageGrid from '../Components/ImageGrid';
import HeroSection from '../Components/HeroSection';
import TitleImageCombo from '../Components/TitleImageCombo';
import img1 from '../pa1.jpg'
import img2 from '../pa2.jpg'
import img3 from '../pa3.jpg'
import wallpaperImage from '../wallaper2.jpg'
import Footer from '../Components/Footer';

const imagesPageOneSectionOne = [
  {
    src: img3,
    title: 'Artsinc App',
    description: 'App design.'
  },
  {
    src: img2,
    title: 'Artsinc App Login',
    description: 'App login page design.'
  },
  {
    src: img1,
    title: '"Eclipse" Logo',
    description: 'Logo design.'
  }
];

const imagesPageOneSectionTwo = [
  {
    src: wallpaperImage,
    title: 'Artsinc App',
    description: 'Description of Image 1 goes here.'
  },
  {
    src: wallpaperImage,
    title: 'Artsinc App',
    description: 'Description of Image 2 goes here.'
  },
  {
    src: wallpaperImage,
    title: 'Artsinc App',
    description: 'Description of Image 3 goes here.'
  }
];

const Home = () => {

  return (
    <body class="background">
      <HeroSection
        title="I am a UI/UX Designer of 6+ years"
        subtitle="I work on app design, logo design, etc."
        buttonText="Learn More"
        buttonLink="../about"
      />
      <Spacer></Spacer>
      <TitleImageCombo
        title="Eclipse Logo"
        description="Logo for a company, 'Eclipse'."
        image={img1}
      />
      <TitleImageCombo
        title="Artsinc App Design"
        description="App design for a mobile app, 'Artsinc'."
        image={img2}
        reverse={true}
      />
      <TitleImageCombo
        title="Artsinc App Design"
        description="App design for a mobile app, 'Artsinc'."
        image={img3}
      />
    </body>
  );
};

export default Home;
