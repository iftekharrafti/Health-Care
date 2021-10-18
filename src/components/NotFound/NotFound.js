import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from './404.jpg';

const NotFound = () => {
    return (
        <div>
            <Container>
                <img src={error} alt="" fluid style={{width: '100%', height: '500px'}} />
                <Link to="/">
                    <Button className="btn" variant="danger">Go Back</Button>
                </Link>
            </Container>
        </div>
    );
};

export default NotFound;