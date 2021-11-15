import React from 'react';
import { Image } from 'react-bootstrap';
import './BikeService.css';

const BikeService = () => {
    //BikeService Part
    return (
        <>
        <section className="bikeservice">
            <div className="container-fluid mx-auto">
                <div className="row py-5">
                    <div className="col-md-6">
                    <Image src="https://i.ibb.co/rZ389Yy/image-copyright-3-removebg-preview.png" fluid />
                    </div>
                    <div className="col-md-6 text-light" style={{textAlign: "left"}}>
                        <h1 className="py-4 text-center">Bike service & repair</h1>
                        <div className="row">
                            <div className="col-md-6 px-5">
                                <div className="py-4">
                                <h4><span style={{color: "tomato"}}>01.</span> Tune-ups & builds</h4>
                                <p>We have all the necessary parts to create a bike that fits you perfectly</p>
                                </div>
                                <div className="py-4">
                                <h4><span style={{color: "tomato"}}>02.</span> Personal bike fit</h4>
                                <p>Adjusment of height, pedals, handlebar for the most comfortable ride</p>
                                </div>
                            </div>
                            <div className="col-md-6 px-5">
                                <div className="py-4">
                                <h4><span style={{color: "tomato"}}>03.</span> Adjust & install</h4>
                                <p>Need a bike repair? We offer a range of spare parts and quality service</p>
                                </div>
                                <div className="py-4">
                                <h4><span style={{color: "tomato"}}>04.</span> Free delivery</h4>
                                <p>Choose a bike at our shop and get free delivery to any location in the city</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default BikeService;