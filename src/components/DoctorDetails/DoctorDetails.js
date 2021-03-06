import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import './doctorDetails.css';
import '../../components/responsive.css';

const DoctorDetails = (props) => {
  const { img, name, category } = props.doctor;
  return (
    <div>
      <Container>
        <Col>
          <Card className="doctor-details">
            <div className="doctor-img">
                <Card.Img variant="top" src={img} />
            </div>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{category}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
};

export default DoctorDetails;
