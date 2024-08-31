import React, { useEffect, useState } from 'react';
import './reviewCard.css';
import { getCountReviewsByTourId } from '../../services/api';

interface ReviewCardProps {
  user_name: string;
  date: string;
  services: number;
  locations: number;
  amenities: number;
  price_review: number;
  comfort: number;
  comment: string;
  idTour: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ user_name, date, services, locations, amenities, price_review, comfort, comment, idTour }) => {
  const averageRating = ((services + locations + amenities + price_review + comfort) / 5).toFixed(1);
  const [reviewCount, setReviewCount] = useState<number>(0);

  useEffect(() => {
    const fetchReviewCount = async () => {
      try {
        const count = await getCountReviewsByTourId(idTour);
        setReviewCount(count);
      } catch (error) {
        console.error('Error fetching review count:', error);
      }
    };

    fetchReviewCount();
  }, [idTour]);

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
            <span className="review-date">{new Date(date).toLocaleDateString()}</span>
            <span className="review-user-name">{user_name}</span>
          </div>
        </div>
        <div className="review-rating">
          <span className="rating-star">★</span>
          <span className="rating-value">{averageRating}</span>
          <span className="rating-count">{reviewCount} reviews</span>
        </div>
        <p className="review-content">{comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
