import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from './about.png';
import './about.css';

const About = () => {
    return (
        <div className="about">
            <Container>
                <h2 className="services-title">About Us</h2>
            <Row xs={1} md={2} className="g-2">
                <Col>
                    <img src={about} alt="" className="img-fluid" />
                </Col>
                <Col>
                    <p><span>WELCOME TO OUR CALIVARD HOSPITAL</span></p>
                    <h3 className="mb-4">CALIVARD HOSPITAL LTD IS ONE OF THE LEADING PRIVATE HEALTHCARE PROVIDER IN BANGLADESH. IT IS LOCATED IN NOAKHALI.</h3>
                    <p>Calivard Hospital Ltd is one of the leading private healthcare provider in Bangladesh. It is located in Noakhali. As the first advanced technology homegrown healthcare unit serving for over 20 years in Bangladesh, Calivard Hospital Ltd was commenced  operations from 1996. Now it is top one multi-disciplinary private hospital in greater Noakhali district. The reputation of calivard hospital ltd is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Staffed by a large team of dedicated professional and a diverse mix of  highly skilled specialists . Calivard Hospital Ltd strives to meet patient’s standards through quality healthcare and making a different in their lives.</p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default About;