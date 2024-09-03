import React, { useState } from 'react';
import './reviewForm.css';
import axios from 'axios';

interface ReviewFormProps {
  tourId: number;
  onReviewSubmitted: (newReview: any) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ tourId, onReviewSubmitted }) => {
  const [ratings, setRatings] = useState({
    services: 0,
    locations: 0,
    amenities: 0,
    prices: 0,
    roomComfort: 0,
  });

  const [isAnonymous, setIsAnonymous] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleRating = (category: string, rating: number) => {
    setRatings({ ...ratings, [category]: rating });
  };

  const toggleAnonymous = () => {
    setIsAnonymous(!isAnonymous);
  };

  const handleSubmit = async () => {
    const reviewData = {
      idTour: tourId,
      user_name: isAnonymous ? 'Anonymous' : name,
      user_email: email,
      date: new Date().toISOString().split('T')[0],
      services: ratings.services,
      locations: ratings.locations,
      amenities: ratings.amenities,
      price_review: ratings.prices,
      comfort: ratings.roomComfort,
      comment,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/reviews', reviewData);
      onReviewSubmitted(response.data);
      setRatings({
        services: 0,
        locations: 0,
        amenities: 0,
        prices: 0,
        roomComfort: 0,
      });
      setName('');
      setEmail('');
      setComment('');
      setIsAnonymous(false);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="review-form">
      <h3>Add a review</h3>
      <div className="rating-section">
        <div className="rating-category left-aligned">
          <span>Services</span>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star ${ratings.services > i ? 'filled' : ''}`}
                onClick={() => handleRating('services', i + 1)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="rating-category">
          <span>Locations</span>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star ${ratings.locations > i ? 'filled' : ''}`}
                onClick={() => handleRating('locations', i + 1)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="rating-category">
          <span>Amenities</span>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star ${ratings.amenities > i ? 'filled' : ''}`}
                onClick={() => handleRating('amenities', i + 1)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="rating-category">
          <span>Prices</span>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star ${ratings.prices > i ? 'filled' : ''}`}
                onClick={() => handleRating('prices', i + 1)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="rating-category full-width">
        <span>Room comfort and quality</span>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`star ${ratings.roomComfort > i ? 'filled' : ''}`}
              onClick={() => handleRating('roomComfort', i + 1)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      
      <div className="input-section">
        <input 
          type="text" 
          placeholder="Your name" 
          className="input-field" 
          value={isAnonymous ? 'Anonymous' : name} 
          onChange={(e) => setName(e.target.value)} 
          disabled={isAnonymous}
        />
        <input 
          type="email" 
          placeholder="Email address" 
          className="input-field" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="input-section">
        <label>
          <input type="checkbox" checked={isAnonymous} onChange={toggleAnonymous} />
          Submit as Anonymous (name only)
        </label>
      </div>
      
      <textarea 
        placeholder="Write your comment" 
        className="comment-field" 
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="submit-button" onClick={handleSubmit}>Submit review</button>
    </div>
  );
};

export default ReviewForm;
