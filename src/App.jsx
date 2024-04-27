import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo" />
        </div>
        <nav className="nav">
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Discover iPhone 13</h1>
          <p className="hero-description">Experience the power of iPhone 13. With its stunning design and advanced features, it's the ultimate iPhone.</p>
          <a href="#" className="btn">Learn More</a>
        </div>
        <div className="hero-image">
          <img src="/images/apple4.jpg" alt="iPhone 13" />
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <img src="/images/apple packgage1.jpg" alt="Feature 1" />
          <h2 className="feature-title">Stunning Design</h2>
          <p className="feature-description">iPhone 13 features a sleek and elegant design that fits perfectly in your hand.</p>
        </div>
        <div className="feature">
          <img src="/images/camera.jpeg" alt="Feature 2" />
          <h2 className="feature-title">Advanced Camera</h2>
          <p className="feature-description">Capture stunning photos and videos with the advanced camera system of iPhone 13.</p>
        </div>
        <div className="feature">
          <img src="/images/phone.jpg" alt="Feature 3" />
          <h2 className="feature-title">Powerful Performance</h2>
          <p className="feature-description">Experience blazing-fast performance and seamless multitasking with iPhone 13.</p>
        </div>
        <div className="feature">
  <img src="/images/battery.jpeg" alt="Feature 4" />
  <h2 className="feature-title">Improved Battery Life</h2>
  <p className="feature-description">Enjoy longer usage times with the improved battery life of iPhone 13.</p>
</div>
<div className="feature">
  <img src="/images/security.jpeg" alt="Feature 5" />
  <h2 className="feature-title">Enhanced Security</h2>
  <p className="feature-description">Keep your data safe and secure with enhanced security features on iPhone 13.</p>
</div>
<div className="feature">
  <img src="/images/5Gconection.jpg" alt="Feature 6" />
  <h2 className="feature-title">5G Connectivity</h2>
  <p className="feature-description">Experience lightning-fast download and streaming speeds with 5G connectivity on iPhone 13.</p>
</div>

      </section>
      <footer className="footer">
        <p>&copy; 2024 Apple Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
