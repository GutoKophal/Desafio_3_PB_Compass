import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Card from '../mostPopularCard/Card';
import './popularTours.css';
import { getTours } from '../../services/api';

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

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getTours();
        setTours(data);
      } catch (error) {
        console.error('Failed to fetch tours:', error);
      }
    };

    fetchTours();
  }, []);

  const tourChunks = [];
  for (let i = 0; i < tours.length; i += 4) {
    tourChunks.push(tours.slice(i, i + 4));
  }

  return (
    <Container className='carousel-container'>
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
                    averageReview={tour.averageReview}
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
