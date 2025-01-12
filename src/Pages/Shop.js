import React from 'react';
import '../styles.css';
import ProductGrid from '../Components/ProductGrid';
import SocialFeed from '../Components/SocialFeed';

import img1 from '../trivordle.png'
import img2 from '../pa2.jpg'
import img3 from '../pa1.jpg'
import andorRender from '../andorrender.png'
import cruiserrender from '../cruiserrender.png'
import tierender from '../tierender.png'
import wallpaperImage from '../wallaper2.jpg'

const products = [
    {
        image: img3,
        title: '"Eclipse" Logo',
        description: 'App design.'
    },
    {
        image: img2,
        title: 'Artsinc App Login',
        description: 'App login page design.'
    },
    {
        image: img1,
        title: 'Trivordle app design',
        description: 'App design for a trivia game.'
    },
    {
        image: andorRender,
         title: 'Andor Render',
        description: 'Star Wars inspired render of another planet, Andor IV.'
    },
    {
        image: cruiserrender,
        title: 'Cruiser Render',
        description: 'Star Wars inspired cruiser modeled and rendered.'
    },
    {
        image: tierender,
          title: 'Fighter Render',
          description: 'Star Wars inspired fighter ship modeled and rendered.'
    }
  ];

const Shop = () => {
  return (
    <div className="shop-layout">
      <div className="left-section">
        <ProductGrid products={products} />
      </div>
      <div className="right-section">
        <SocialFeed />
      </div>
    </div>
  );
};

export default Shop;
