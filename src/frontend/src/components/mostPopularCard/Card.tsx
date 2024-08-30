import React from 'react';
import { FaStar, FaClock } from 'react-icons/fa';
import './card.css';

interface CardProps {
  image_url: string;
  city: string;
  country: string;
  title: string;
  averageReview: number;
  duration: number;
  price: number;
}

const Card: React.FC<CardProps> = ({ image_url, city, country, title, averageReview, duration, price }) => {
  return (
    <div className="card h-100">
      <img 
        src={image_url} 
        className="card-img-top" 
        alt={title} 
      />
      <div className="card-body">
        <p className="text-muted mb-2">{city}, {country}</p>
        <h5 className="card-title">{title}</h5>
        <div className="d-flex align-items-center mb-2">
          <span className="text-danger me-2">
            <FaStar /> {averageReview}
          </span>
          <span className="text-muted me-3">15 reviews</span>
          <span className="text-muted">
            <FaClock /> {duration} days
          </span>
        </div>
        <p className="text-muted">Starting From</p>
        <h5 className="text-dark fw-bold">${price}</h5>
      </div>
    </div>
  );
};

export default Card;