import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import TourTypeItem from '../tourTypeItem/TourTypeItem'
import { FaSuitcase } from 'react-icons/fa';
import './TourTypeCarousel.css';

const TourTypeCarousel: React.FC = () => {
  return (
    <Container>
      <Carousel indicators={true} interval={null} className="tour-type-carousel">
        <Carousel.Item>
          <Row>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={10} price={250} />
            </Col>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={8} price={300} />
            </Col>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={12} price={150} />
            </Col>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={7} price={400} />
            </Col>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={5} price={600} />
            </Col>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={15} price={200} />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={9} price={270} />
            </Col>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={11} price={350} />
            </Col>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={6} price={180} />
            </Col>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={14} price={320} />
            </Col>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={4} price={210} />
            </Col>
            <Col md={2}>
              <TourTypeItem icon={<FaSuitcase />} title="Beach" toursCount={3} price={700} />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default TourTypeCarousel;
