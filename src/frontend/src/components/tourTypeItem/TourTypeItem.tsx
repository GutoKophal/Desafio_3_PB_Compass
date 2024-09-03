import React from 'react';
import './TourTypeItem.css';

interface TourTypeItemProps {
  icon: React.ReactNode;
  title: string;
  toursCount: number;
  price: number;
}

const TourTypeItem: React.FC<TourTypeItemProps> = ({ icon, title, toursCount, price }) => {
  return (
    <div className="tour-type-item">
      <div className="icon-container">
        {icon}
      </div>
      <h5 className="tour-title">{title}</h5>
      <p className="tours-count">{toursCount} Tours+</p>
      <p className="price">From <span>${price}</span></p>
    </div>
  );
};

export default TourTypeItem;
