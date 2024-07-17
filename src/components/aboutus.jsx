import React, { useState } from 'react';
import '../styles/styles1.css';

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: require("../styles/images/provide-clean-water-to-the-poor.jpg"),
      alt: "Clean Water Distribution",
      title: "Clean Water Distribution",
    },
    {
      src: require("../styles/images/foodaid3.jpg"),
      alt: "Food Aid",
      title: "Food Aid",
    },
    {
      src: require("../styles/images/031a0000-0aff-0242-e67d-08da39b8ba5a_w1080_h608.jpg"),
      alt: "Medicine Provision",
      title: "Medicine Provision",
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <main>
      <h1 id="title">About Us</h1>
      <div className="about-us">
        <div>
          <h2>Our Mission</h2>
          <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
            We facilitate communities to respond to humanitarian emergencies to alleviate human suffering and work
            with partners to implement innovative community driven programmes that transform lives and enhance community resilience.
          </p>
          <br /><br /><br />
          <div>
            <h2>Our Core values</h2>
            <p style={{ fontWeight: 'bold', fontSize: 'larger' }}>
              1. Service to humanity<br />
              2. Equality<br />
              3. Community Center<br />
              4. Unity<br />
              5. Innovation<br />
              <br />
            </p>
          </div>
        </div>
        <section className="main">
          <div className="slideshow">
            <div className="slides">
              {slides.map((slide, index) => (
                <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                  <img src={slide.src} alt={slide.alt} className="image" />
                  <div className="image-data">
                    <h2>{slide.title}</h2>
                  </div>
                </div>
              ))}
            </div>
            <button className="nav-btn prev" onClick={handlePrev}>&#10094;</button>
            <button className="nav-btn next" onClick={handleNext}>&#10095;</button>
          </div>
        </section>
      </div>
      <center>
        <div>
          <h1 style={{ color: 'white' }}>Our Vision</h1>
        </div>
        <div style={{ fontSize: 'x-large', fontWeight: 'bold' }}>
          <p style={{ color: 'white' }}>
            To be a <span style={{ color: '#241571' }}>leading humanitarian organization</span> sustainably promoting the <span style={{ color: '#241571' }}>well-being, health and resilience</span> of communities.
          </p>
        </div>
      </center>
    </main>
  );
};

export default AboutUs;
