import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import './History.css';

const History = () => {
    return (
        <>
        <section className="my-5">
            <div className="container">
                <div className="row mx-auto text-center" style={{ backgroundColor: '#335154'}}>
                    <div className="col-md-6 py-0 px-0">
                    <Image src="https://i.ibb.co/dgQ4MsB/pexels-oleg-magni-861014.jpg" fluid className="w-100"/>
                    </div>
                    
                    <div className="col-md-6 text-light text-center" style={{ backgroundColor: '#335154'}}>
                        <h1 className="py-4" style={{ fontSize: '50px' }}>Our History</h1>
                        <div className="text-center py-3 mx-auto">
                            <Nav variant="pills" defaultActiveKey="2012">
                                <Nav.Item className="mb-2 mx-auto">
                                    <Nav.Link className="date-color" eventKey="2012" style={{ backgroundColor: 'white', color: 'black' }}>2012</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mb-2 mx-auto">
                                    <Nav.Link className="date-color" eventKey="2015" style={{ backgroundColor: 'white', color: 'black' }}>2015</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mb-2 mx-auto">
                                    <Nav.Link className="date-color" eventKey="2019" style={{ backgroundColor: 'white', color: 'black' }}>2019</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mb-2 mx-auto">
                                    <Nav.Link className="date-color" eventKey="2021" style={{ backgroundColor: 'white', color: 'black' }}>2021</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <p className="py-3 px-3">Welcome to Kikoo! We are one of the biggest bicycle-families in the world. Our services include all types of repair, search of a perfect bike for every customer, sport events organization and much more. Join our community and become a part of the bike-family.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default History;