import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import './serviceDetails.css';

const ServiceDetails = (props) => {
  const { name, description, img } = props.service;
  return (
    <div>
      <Container>
        <Col>
          <Card className="service-details">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
};

export default ServiceDetails;
