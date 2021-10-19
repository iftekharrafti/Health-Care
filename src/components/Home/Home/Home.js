import React from 'react';
import OurDepartment from '../../OurDepartment/OurDepartment';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Doctors from '../../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurDepartment></OurDepartment>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;