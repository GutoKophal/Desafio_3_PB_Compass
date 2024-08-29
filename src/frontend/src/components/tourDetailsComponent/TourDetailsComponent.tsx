import React from 'react';
import './tourDetailsComponent.css';

interface TourDetailsProps {
  image: string;
  location: string;
  mapLink: string;
  title: string;
  price: string;
  duration: string;
  maxPeople: number;
  minAge: string;
  tourType: string;
  reviews: string;
  rating: number;
  overview: string;
}

const TourDetailsComponent: React.FC = () => {
  const tourDetails: TourDetailsProps = {
    image: 'https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/images%2Fdune.jpg?alt=media&token=471019eb-25c0-471f-8c77-afb28d47ed71',
    location: 'Budapest, Hungary',
    mapLink: '#',
    title: 'Wonders of the West Coast & Kimberly',
    price: '$104',
    duration: '7 days',
    maxPeople: 25,
    minAge: '12+',
    tourType: 'Adventure',
    reviews: '15 reviews',
    rating: 4.8,
    overview: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  };

  return (
    <div className="tour-details">
      <img src={tourDetails.image} alt={tourDetails.title} className="tour-image" />

      <div className="tour-info">
        <div className="location">
          <span>{tourDetails.location}</span> <a href={tourDetails.mapLink}>View on map</a>
        </div>
        <h2 className="title">{tourDetails.title}</h2>

        <div className="details">
          <div className="detail-item">
            <span className="label">From</span>
            <span className="value price">{tourDetails.price}</span>
          </div>
          <div className="detail-item">
            <span className="label">Duration</span>
            <span className="value">{tourDetails.duration}</span>
          </div>
          <div className="detail-item">
            <span className="label">Max People</span>
            <span className="value">{tourDetails.maxPeople}</span>
          </div>
          <div className="detail-item">
            <span className="label">Min Age</span>
            <span className="value">{tourDetails.minAge}</span>
          </div>
          <div className="detail-item">
            <span className="label">Tour Type</span>
            <span className="value">{tourDetails.tourType}</span>
          </div>
          <div className="detail-item">
            <span className="label">Reviews</span>
            <span className="value rating">{tourDetails.rating} <span className="reviews">({tourDetails.reviews})</span></span>
          </div>
        </div>

        <h3>Overview</h3>
        <p>{tourDetails.overview}</p>

        <div className="tour-map">
          <h3>Map</h3>
          <iframe
            title="Tour Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28622.367777035295!2d-53.639357350000004!3d-26.268284400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1724953603912!5m2!1spt-BR!2sbr"
            width="102%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          />
        </div>
        <h3>Avarege Reviews</h3>
      </div>
    </div>
  );
};

export default TourDetailsComponent;