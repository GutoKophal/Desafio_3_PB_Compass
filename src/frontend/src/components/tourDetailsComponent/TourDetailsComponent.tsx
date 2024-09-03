import React from 'react';
import './tourDetailsComponent.css';

interface TourDetailsProps {
  image: string;
  location: string;
  latitude: number;
  longitude: number;
  title: string;
  price: string;
  duration: string;
  maxPeople: number;
  minAge: string;
  tourType: string;
  overallRating: number | null;
  reviewCount: number;
  overview: string;
}

const TourDetailsComponent: React.FC<TourDetailsProps> = ({
  image,
  location,
  latitude,
  longitude,
  title,
  price,
  duration,
  maxPeople,
  minAge,
  tourType,
  overallRating,
  reviewCount,
  overview,
}) => {
  const googleMapsSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1724953603912!5m2!1spt-BR!2sbr`;

  return (
    <div className="tour-details">
      <img src={image} alt={title} className="tour-image" />

      <div className="tour-info">
        <div className="location">
          <span>{location}</span> <a href={`https://www.google.com/maps?q=${latitude},${longitude}`} target="_blank" rel="noopener noreferrer">View on map</a>
        </div>
        <h2 className="title">{title}</h2>

        <div className="details">
          <div className="detail-item">
            <span className="label">From</span>
            <span className="value price">{price}</span>
          </div>
          <div className="detail-item">
            <span className="label">Duration</span>
            <span className="value">{duration}</span>
          </div>
          <div className="detail-item">
            <span className="label">Max People</span>
            <span className="value">{maxPeople}</span>
          </div>
          <div className="detail-item">
            <span className="label">Min Age</span>
            <span className="value">{minAge}</span>
          </div>
          <div className="detail-item">
            <span className="label">Tour Type</span>
            <span className="value">{tourType}</span>
          </div>
          <div className="detail-item">
            <span className="label">Reviews</span>
            <span className="value rating">
              {overallRating !== null ? overallRating.toFixed(1) : 'No reviews yet'} 
              <span className="reviews">{reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}</span>
            </span>
          </div>
        </div>
        
        <h3>Overview</h3>
        <p>{overview}</p>

        <div className="tour-map">
          <h3>Map</h3>
          <iframe
            title="Tour Location"
            src={googleMapsSrc}
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          />
        </div>
        <div className='avarege'>
          <h3>Avarege Reviews</h3>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsComponent;
