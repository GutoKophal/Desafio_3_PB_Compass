import React, { useEffect, useState } from 'react';
import './avaregeReviewsComponent.css';

interface ReviewData {
  services: number;
  locations: number;
  amenities: number;
  prices: number;
  food: number;
  roomComfort: number;
}

const AverageReviewsComponent: React.FC = () => {
  const [reviewData, setReviewData] = useState<ReviewData | null>(null);
  const [averageRating, setAverageRating] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        services: 4,
        locations: 2,
        amenities: 3,
        prices: 4,
        food: 3,
        roomComfort: 4,
      };
      setReviewData(data);
      calculateAverage(data);
    };

    fetchData();
  }, []);

  const calculateAverage = (data: ReviewData) => {
    const values = Object.values(data);
    const sum = values.reduce((acc, rating) => acc + rating, 0);
    const avg = sum / values.length;
    setAverageRating(avg);
  };

  if (!reviewData || averageRating === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="average-reviews">
      <div className="average-box">
        <span className="average-number">{averageRating.toFixed(1)}</span>
        <span className="average-text">Excellent</span>
      </div>
      <div className="review-bars">
        <div className="review-bar">
          <span className="label">Services</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: `${(reviewData.services / 5) * 100}%` }}></div>
            </div>
            <span className="value">{reviewData.services.toFixed(1)}</span>
          </div>
        </div>
        <div className="review-bar">
          <span className="label">Locations</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: `${(reviewData.locations / 5) * 100}%` }}></div>
            </div>
            <span className="value">{reviewData.locations.toFixed(1)}</span>
          </div>
        </div>
        <div className="review-bar">
          <span className="label">Amenities</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: `${(reviewData.amenities / 5) * 100}%` }}></div>
            </div>
            <span className="value">{reviewData.amenities.toFixed(1)}</span>
          </div>
        </div>
        <div className="review-bar">
          <span className="label">Prices</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: `${(reviewData.prices / 5) * 100}%` }}></div>
            </div>
            <span className="value">{reviewData.prices.toFixed(1)}</span>
          </div>
        </div>
        <div className="review-bar">
          <span className="label">Food</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: `${(reviewData.food / 5) * 100}%` }}></div>
            </div>
            <span className="value">{reviewData.food.toFixed(1)}</span>
          </div>
        </div>
        <div className="review-bar">
          <span className="label">Room comfort and quality</span>
          <div className="bar-container">
            <div className="bar">
              <div className="fill" style={{ width: `${(reviewData.roomComfort / 5) * 100}%` }}></div>
            </div>
            <span className="value">{reviewData.roomComfort.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageReviewsComponent;
