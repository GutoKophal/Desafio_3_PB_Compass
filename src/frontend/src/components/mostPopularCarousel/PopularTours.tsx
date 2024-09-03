import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Card from '../mostPopularCard/Card';
import './popularTours.css';
import { getTours } from '../../services/api';
import { getReviewsByTourId } from '../../services/api';

interface Tour {
  id: number;
  name: string;
  city: string;
  country: string;
  price: number;
  image_url: string;
  averageReview: number;
  duration: number;
}

const PopularTours: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [averageRatings, setAverageRatings] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getTours();
        setTours(data);
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      }
    };

    fetchTours();
  }, []);

  useEffect(() => {
    const fetchRatings = async () => {
      const ratings: { [key: number]: number } = {};

      for (const tour of tours) {
        try {
          const reviews = await getReviewsByTourId(tour.id);
          const reviewRatings = reviews.map(
            (review: any) =>
              (review.services +
                review.locations +
                review.amenities +
                review.price_review +
                review.comfort) /
              5
          );
          const totalReviews = reviewRatings.length;
          const sumRatings = reviewRatings.reduce(
            (acc: number, rating: number) => acc + rating,
            0
          );
          ratings[tour.id] = totalReviews > 0 ? sumRatings / totalReviews : 0;
        } catch (error) {
          console.error(`Failed to fetch reviews for tour ${tour.id}:`, error);
        }
      }

      setAverageRatings(ratings);
    };

    if (tours.length > 0) {
      fetchRatings();
    }
  }, [tours]);

  const sortedTours = tours.sort((a, b) => {
    const ratingA = averageRatings[a.id] || 0;
    const ratingB = averageRatings[b.id] || 0;
    return ratingB - ratingA;
  });

  const tourChunks = [];
  for (let i = 0; i < sortedTours.length; i += 4) {
    tourChunks.push(sortedTours.slice(i, i + 4));
  }

  return (
    <Container className="carousel-container">
      <Carousel indicators={true} interval={null} className="custom-carousel">
        {tourChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {chunk.map((tour) => (
                <Col key={tour.id} md={3}>
                  <Card
                    id={tour.id}
                    image_url={tour.image_url}
                    city={tour.city}
                    country={tour.country}
                    title={tour.name}
                    averageReview={averageRatings[tour.id] || 0}
                    duration={tour.duration}
                    price={tour.price}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default PopularTours;
