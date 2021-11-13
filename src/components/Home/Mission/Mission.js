import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Mission.css';

const Mission = () => {
    return (
        <>
        {/* Mission Section Part */}
        <section className="mission">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 py-5" style={{textAlign: "left"}}>
                        <h1 className="py-4">The best bicycling experience</h1>
                        <p className="py-3">Welcome to Kikoo! We are one of the biggest bicycle-families in the world. Our services include all types of repair, search of a perfect bike for every customer, sport events organization and much more. Join our community and become a part of the bike-family.</p>
                        <Link to="/about"><Button size="lg" style={{backgroundColor: 'tomato', border: 'none'}} className="py-3 my-3">More About Our Mission</Button></Link>
                    </div>
                    <div className="col-md-6">
                    <Image src="https://i.ibb.co/PWSdgjS/pexels-pixabay-248547.jpg" fluid />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Mission;