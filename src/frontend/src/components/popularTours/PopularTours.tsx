import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Card from '../card/Card';
import './popularTours.css'

const PopularTours: React.FC = () => {
  return (
    <Container>
      <Carousel indicators={true} interval={null} className="custom-carousel">
        <Carousel.Item>
          <Row>
            <Col md={3}>
              <Card />
            </Col>
            <Col md={3}>
              <Card />
            </Col>
            <Col md={3}>
              <Card />
            </Col>
            <Col md={3}>
              <Card />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={3}>
              <Card />
            </Col>
            <Col md={3}>
              <Card />
            </Col>
            <Col md={3}>
              <Card />
            </Col>
            <Col md={3}>
              <Card />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default PopularTours;
