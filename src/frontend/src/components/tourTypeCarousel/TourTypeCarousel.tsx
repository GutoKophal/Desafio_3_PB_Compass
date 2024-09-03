import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import TourTypeItem from '../tourTypeItem/TourTypeItem';
import { FaSuitcase } from 'react-icons/fa';
import './TourTypeCarousel.css';
import { getTypes } from '../../services/api';

interface Type {
  id: number;
  name: string;
}

const chunkArray = (arr: Type[], size: number) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

const TourTypeCarousel: React.FC = () => {
  const [types, setTypes] = useState<Type[]>([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const data = await getTypes();
        setTypes(data);
      } catch (error) {
        console.error('Failed to fetch types:', error);
      }
    };

    fetchTypes();
  }, []);

  const typeChunks = chunkArray(types, 6);

  return (
    <Container>
      <Carousel indicators={true} interval={null} className="tour-type-carousel">
        {typeChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {chunk.map((type) => (
                <Col key={type.id} md={2}>
                  <TourTypeItem 
                    icon={<FaSuitcase />} 
                    title={type.name}
                    toursCount={Math.floor(Math.random() * 15) + 5}
                    price={Math.floor(Math.random() * 500) + 100}
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

export default TourTypeCarousel;