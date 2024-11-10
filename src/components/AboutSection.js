import React,{useState,useEffect} from 'react';
import '../styles/AboutSection.css';
const AboutUs=()=>{
  const[currentSlide,setCurrentSlide]=useState(0);
  const images=[
    require('../assets/images/company_image.jpg'),
    require('../assets/images/company_image2.jpg'),
    require('../assets/images/company_image3.jpg'),
  ];
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setCurrentSlide((prev)=>(prev+1) % images.length);
    },2000);

    return ()=>clearInterval(intervalId);
  },[]);

  return(
    <div className="about-us-container">
      <div className="about-us-header">About Us</div>
      <div className="about-us-content">
        <div className="about-us-text">
          <h3>Company Overview</h3>
          <p>
            We are a leading company in the tech industry, providing innovative solutions to clients across the globe. With a focus on excellence, we deliver high-quality services that exceed expectations.
          </p>
          <h3>Mission</h3>
          <p>
            Our mission is to empower businesses by offering state-of-the-art solutions, fostering long-term relationships with our clients, and driving growth through innovation and sustainability.
          </p>
        </div>
        <div className="image-slider">
          <div className="slider-container" style={{transform: `translateX(-${currentSlide * 33.3333}%)`}}>
            {images.map((image, index)=>(
              <img key={index} src={image} alt={`Slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="achievements-section">
        <div className="achievements-header">Our Achievements</div>
        <div className="achievements-container">
          <div className="achievement-item">
            <div className="icon">🏆</div>
            <div className="stat">150+</div>
            <div className="label">Successful Projects</div>
          </div>
          <div className="achievement-item">
            <div className="icon">🌍</div>
            <div className="stat">50+</div>
            <div className="label">Countries Served</div>
          </div>
          <div className="achievement-item">
            <div className="icon">💡</div>
            <div className="stat">200+</div>
            <div className="label">Innovative Solutions</div>
          </div>
          <div className="achievement-item">
            <div className="icon">📈</div>
            <div className="stat">30%</div>
            <div className="label">Annual Growth</div>
          </div>
        </div>
      </div>
      <div className="team-section">
        <div className="team-header">Meet Our Team</div>
        <div className="team-members">
          <div className="team-member">
            <img src={require('../assets/images/pic1.jpg')} alt="Team Member 1" />
            <h4>Ganesh</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={require('../assets/images/pic2.jpg')} alt="Team Member 2" />
            <h4>Sarath</h4>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src={require('../assets/images/pic3.jpg')} alt="Team Member 3" />
            <h4>Fazal</h4>
            <p>Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
