import React, { useState } from 'react';
import './reviewForm.css';

const ReviewForm: React.FC = () => {
  const [ratings, setRatings] = useState({
    services: 0,
    locations: 0,
    amenities: 0,
    prices: 0,
    roomComfort: 0,
  });

  const [isAnonymous, setIsAnonymous] = useState(false);
  const [name, setName] = useState('');

  const handleRating = (category: string, rating: number) => {
    if (ratings[category as keyof typeof ratings] === rating) {
      setRatings({ ...ratings, [category]: 0 });
    } else {
      setRatings({ ...ratings, [category]: rating });
    }
  };

  const toggleAnonymous = () => {
    setIsAnonymous(!isAnonymous);
    if (!isAnonymous) {
      setName('');
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
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          disabled={isAnonymous}
        />
        <input type="email" placeholder="Email address" className="input-field" />
      </div>
      
      <div className="input-section">
        <label>
          <input type="checkbox" checked={isAnonymous} onChange={toggleAnonymous} />
          Submit as Anonymous
        </label>
      </div>
      
      <textarea placeholder="Write your comment" className="comment-field" />
      <button className="submit-button">Submit review</button>
    </div>
  );
};

export default ReviewForm;
