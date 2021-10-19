import React from "react";
import banner from "./slider.png";
import "./banner.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../../components/responsive.css';

const Banner = () => {
  return (
    <div
      className="banner"
      style={{ background: `url(${banner})`, backgroundSize: "cover", backgroundPosition:"center" }}
    >
      <Container>
        <Row>
          <Col>
            <h2>Get Better Care For <br /> Your <span>Health</span></h2>
            <p>Indoor patients are treated in wards, organized according to specialties. There are different type of bed &amp; cabin</p>
            <Link to="/about">
                <Button className="btn" variant="outline-secondary">About More</Button>
            </Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
