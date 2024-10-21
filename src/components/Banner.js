import React from 'react';
import './Banner.css'; // Import CSS file for styling

const Banner = ({ imageUrl, altText }) => {
  return (
    <div className="banner">
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default Banner;
