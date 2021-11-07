import React from 'react';
import Banner from '../Banner/Banner';
import MainContent from '../MainContent/MainContent';
import "./Portfolio.scss";

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Banner />

            <MainContent />
        </div>
    );
};

export default Portfolio