import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DoctorDetails from '../DoctorDetails/DoctorDetails';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('fakeDoctor.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h2 className="services-title">MEET OUR SPECIALISTS</h2>
            <Row xs={1} md={3} className="g-2">
                {
                    doctors.map(doctor => <DoctorDetails
                        key={doctor.id}
                        doctor={doctor}
                    ></DoctorDetails>)
                }
            </Row>
        </div>
    );
};

export default Doctors;