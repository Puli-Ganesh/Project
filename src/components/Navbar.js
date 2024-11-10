import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
const Navbar=()=>{
  const [isVisible,setIsVisible]=useState(true);
  const [prevScrollPos,setPrevScrollPos]=useState(0);

  const handleScroll=()=>{
    const currentScrollPos=window.pageYOffset;
    if (currentScrollPos > prevScrollPos){
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    };
  },[prevScrollPos]);

  return (
    <nav className={`navbar ${isVisible ? 'show' : 'hide'}`}>
      <div className="navbar-left">
        <a href="/" className="navbar-brand">GRS APPS</a>
      </div>
      <div className="navbar-right">
        <a href="#home" className="navbar-item">Home</a>
        <a href="#services" className="navbar-item">Services</a>
        <a href="#about" className="navbar-item">About</a>
        <a href="#contact" className="navbar-item">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
