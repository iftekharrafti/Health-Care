import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import department from './departmentpng.png';
import './ourDepartment.css';

const OurDepartment = () => {
  return (
    <div className="department">
      <Container>
        <Row xs={1} md={2} className="g-2">
          <Col>
            <p>
              <span>Our Department</span>
            </p>
            <h3>We Take Care Of Your Life Healthy Health</h3>
            <Card >
              <Card.Body>
                <Card.Title>Pediatrics</Card.Title>
                <Card.Text>
                Paediatrics  is the branch of medicine that involves the medical care of infants, children, and adolescents.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-4">
              <Card.Body>
                <Card.Title>Dental</Card.Title>
                <Card.Text>
                Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity (the mouth)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <img className="img-fluid" src={department} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurDepartment;
