import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <div className="about-info">
          <h2>Company Information</h2>
          <p>Welcome to dummy Jio Mart, where we are dedicated to providing top-notch products and exceptional service. Established in [Year], we have been serving our customers with passion and commitment.</p>
          <p>Our mission is to provide a good items to customers. We strive to ensure the highest quality and satisfaction in every product we offer.</p>
        </div>
        <div className="about-history">
          <h2>Our History</h2>
          <p>dummy Jio Mart started with a simple idea and has grown into a leading provider of product/service. Our journey began in 2024/pune, and over the years, we have expanded our reach to our goal.</p>
          <p>Our values are rooted in verious aspect. We believe in  core principles and values of customers.</p>
        </div>
      </section>
      
      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} dummyy JIO MART. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default About;
