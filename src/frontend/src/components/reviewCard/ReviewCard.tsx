import React from 'react';
import './reviewCard.css';

const ReviewCard: React.FC = () => {
  return (
    <div className="review-card">
      <img className="review-avatar" src="https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fperfile.jpg?alt=media&token=f26245f8-cf25-46c3-a5ba-372eb70a76a3" alt="User Avatar" />
      <div className="review-content-wrapper">
        <div className="review-header">
          <div className="review-user-info">
            <span className="review-date">March 20, 2022</span>
            <span className="review-user-name">Sindy Simmons</span>
          </div>
        </div>
        <div className="review-rating">
          <span className="rating-star">★</span>
          <span className="rating-value">4.8</span>
          <span className="rating-reviews">15 reviews</span>
        </div>
        <p className="review-content">
          Objectively productivate just in time information with dynamic channels. Energetically exploit seamless growth strategies after 24/7 experiences.
        </p>
      </div>
  </div>

  );
};

export default ReviewCard;
