import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row xs={1} md={2} className="g-2">
                    <Col>
                        <h3>LOCATION</h3>
                        <p>Maijdee, Noakhali, Bangladesh</p>
                    </Col>
                    <Col>
                        <h3>ABOUT</h3>
                        <p>CALIVARD HOSPITAL LTD IS ONE OF THE LEADING PRIVATE HEALTHCARE PROVIDER IN BANGLADESH. IT IS LOCATED IN NOAKHALI.</p>
                    </Col>
                </Row>
                <div className="copyright">
                    <Row>
                        <Col>
                            <p>All rights reserved &copy; Calivard</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Footer;