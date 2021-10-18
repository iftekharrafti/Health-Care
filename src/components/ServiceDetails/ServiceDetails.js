import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import './serviceDetails.css';

const ServiceDetails = (props) => {
  const { id, name, description, img } = props.service;
  const {serviceId} = useParams();

  
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
            <Card.Footer>
                <Link to={`/serviceDetails/${id}`}>
                    <Button  variant="outline-secondary">See More</Button>
                </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Container>
    </div>
  );
};

export default ServiceDetails;
