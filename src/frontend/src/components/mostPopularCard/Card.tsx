import React from 'react';
import { FaStar, FaClock } from 'react-icons/fa';
import './card.css';

const Card: React.FC = () => {
  return (
    <div className="card h-100">
      <img 
        src="https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fdune.jpg?alt=media&token=471019eb-25c0-471f-8c77-afb28d47ed71" 
        className="card-img-top" 
        alt="Beautiful scenery" 
      />
      <div className="card-body">
        <p className="text-muted mb-2">Budapest, Hungary</p>
        <h5 className="card-title">Wonders of the West Coast & Kimberley</h5>
        <div className="d-flex align-items-center mb-2">
          <span className="text-danger me-2">
            <FaStar /> 4.6
          </span>
          <span className="text-muted me-3">15 reviews</span>
          <span className="text-muted">
            <FaClock /> 7days
          </span>
        </div>
        <p className="text-muted">Starting From</p>
        <h5 className="text-dark fw-bold">$520</h5>
      </div>
    </div>
  );
};

export default Card;
