import React, { useEffect, useState } from 'react';
import { FaStar, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './card.css';
import { getReviewsByTourId } from '../../services/api';

interface CardProps {
  id: number;
  image_url: string;
  city: string;
  country: string;
  title: string;
  averageReview: number;
  duration: number;
  price: number;
}

const Card: React.FC<CardProps> = ({ id, image_url, city, country, title, duration, price }) => {
  const navigate = useNavigate();
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [reviewCount, setReviewCount] = useState<number>(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviewsByTourId(id);
        const reviewRatings = reviews.map((review: any) => 
          (review.services + review.locations + review.amenities + review.price_review + review.comfort) / 5
        );
        const totalReviews = reviewRatings.length;
        const sumRatings = reviewRatings.reduce((acc: number, rating: number) => acc + rating, 0);
        setAverageRating(totalReviews > 0 ? sumRatings / totalReviews : null);
        setReviewCount(totalReviews);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchReviews();
  }, [id]);

  const handleClick = () => {
    navigate(`/tourDetails/${id}`);
  };

  return (
    <div className="card h-100" onClick={handleClick} style={{ cursor: 'pointer' }}>
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
            <FaStar /> 
            {averageRating !== null ? averageRating.toFixed(1) : 'No reviews yet'}
          </span>
          <span className="text-muted me-3">
            {reviewCount > 0 ? `${reviewCount} ${reviewCount === 1 ? 'review' : 'reviews'}` : ''}
          </span>
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
