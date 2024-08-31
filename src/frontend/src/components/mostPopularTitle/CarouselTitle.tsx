import React from 'react';
import './carouselTitle.css';

interface CarouselTitleProps {
  subtitle: string;
  mainTitle: string;
}

const CarouselTitle: React.FC<CarouselTitleProps> = ({ subtitle, mainTitle }) => {
  return (
    <div className="title-container">
      <p className="subtitle">{subtitle}</p>
      <h2 className="main-title">{mainTitle}</h2>
    </div>
  );
};

export default CarouselTitle;
