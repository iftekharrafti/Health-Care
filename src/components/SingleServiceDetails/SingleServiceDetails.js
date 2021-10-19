import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import './singleeServiceDetails.css';

const SingleServiceDetails = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://iftekharrafti.github.io/jsonapi/fakeServices.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    const filterService = services.filter(sr => (sr.id == serviceId))
    const srData = filterService[0];

    return (
        <div className="my-4">
            <Container>
                <Row xs={1} md={1} className="g-2">
                    <Col>
                        <div className="details">
                            <img src={srData?.img} alt="" />
                            <h2 className="mt-3">{srData?.name}</h2>
                            <p>{srData?.description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleServiceDetails;