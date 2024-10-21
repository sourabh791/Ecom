import React, { useState } from 'react';
import './Slidshow.css'; // Import CSS file for styling

const Slideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <button className="prev" onClick={prevSlide}>‹</button>
      <img src={images[current]} alt={`Slide ${current + 1}`} />
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Slideshow;
