import React from 'react';
import '../styles/Services.css';
const services=[
  {title: "Web Development",description: "Build responsive, interactive websites.",},
  {title: "App Development",description: "Create high-performance mobile apps.",},
  {title: "UI/UX Design",description: "Design user-friendly, aesthetic interfaces.",},
  {title: "PSPK the Powerful Politician",description: "Learn about the leadership and impact of PSPK.",}];

const Services=()=>{
  return (
    <div>
      <div className="services-header">Our Services</div>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <p className="heading">{service.title}</p>
            <p>{service.description}</p>
            <p>Learn More</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
