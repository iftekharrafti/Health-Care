import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeServices.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div>
            <h2 className="services-title">Our Services</h2>
            <Row xs={1} md={3} className="g-2">
                {
                    services.map(service => <ServiceDetails
                        key={service.id}
                        service={service}
                    ></ServiceDetails>)
                }
            </Row>
        </div>
    );
};

export default Services;