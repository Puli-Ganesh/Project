import React from 'react';
import '../styles/HeroSection.css';
import heroImage from '../assets/images/hero.jpeg';
const HeroSection=()=>{
  return (
    <div className="hero-section">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to GRS Apps</h1>
        <p>We offer innovative solutions to help your business grow</p>
      </div>
    </div>
  );
};

export default HeroSection;
