import React from 'react';
import '../styles/Test.css';
const Testimonial=()=>{
  return (
    <div className="testimonial-container">
      <div className="vision-values-section">
        <div className="vision-values-header">Our Vision & Values</div>
        <div className="vision-values-container">
          <div className="vision-item">
            <div className="icon">🌱</div>
            <h4>Innovation</h4>
            <p>We continuously innovate to stay ahead of industry trends and provide our clients with cutting-edge solutions.</p>
          </div>
          <div className="vision-item">
            <div className="icon">🤝</div>
            <h4>Integrity</h4>
            <p>We believe in honesty, transparency, and upholding the highest ethical standards in all our interactions.</p>
          </div>
          <div className="vision-item">
            <div className="icon">💡</div>
            <h4>Customer Centricity</h4>
            <p>Our customers are at the heart of everything we do, and we are committed to delivering exceptional value to them.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
