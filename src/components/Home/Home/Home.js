import React from 'react';
import OurDepartment from '../../OurDepartment/OurDepartment';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurDepartment></OurDepartment>
        </div>
    );
};

export default Home;