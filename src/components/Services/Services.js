import React from 'react';
import BikeService from '../Home/BikeService/BikeService';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Offers from './Offers/Offers';
import './Services.css';

const Services = () => {
    return (
        <>
        <section className="services">
            <div>
                <Header></Header>
            </div>
        </section>
        <div>
            <Offers></Offers>
        </div>
        <BikeService></BikeService>
        <Footer></Footer>
        </>
    );
};

export default Services;