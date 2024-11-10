import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Test';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Services />
      <AboutSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
