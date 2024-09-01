import React from 'react';
import './reviewCard.css';

interface ReviewCardProps {
  user_name: string;
  date: string;
  services: number;
  locations: number;
  amenities: number;
  price_review: number;
  comfort: number;
  comment: string;
  totalReviews: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  user_name,
  date,
  services,
  locations,
  amenities,
  price_review,
  comfort,
  comment,
  totalReviews,
}) => {
  const averageRating = ((services + locations + amenities + price_review + comfort) / 5).toFixed(1);
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="review-card">
      <img
        className="review-avatar"
        src="https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fperfile.jpg?alt=media&token=f26245f8-cf25-46c3-a5ba-372eb70a76a3"
        alt="User Avatar"
      />
      <div className="review-content-wrapper">
        <div className="review-header">
          <div className="review-user-info">
            <span className="review-date">{formattedDate}</span>
            <span className="review-user-name">{user_name}</span>
          </div>
          <div className="review-rating">
            <span className="rating-star">★</span>
            <span className="rating-value">{averageRating}</span>
            <span className="rating-count">({totalReviews} {totalReviews === 1 ? 'review' : 'reviews'})</span>
          </div>
        </div>
        <p className="review-content">{comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
