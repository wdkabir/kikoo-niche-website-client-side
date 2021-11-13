import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Offers.css';

const Offers = () => {
    return (
        <>
        <section style={{backgroundColor: "#f0f2f2"}}>
            <div>
            <Container>
                <h1 className="py-5">What we offer</h1>
                <Row xs={1} md={3} className="g-4 pb-5 text-center mx-auto">
                    <Col>
                        <Card className="py-4 mx-4 offer-card">
                        <Card.Img variant="top" className=" img-fluid rounded-4 offers-card-img mx-auto" src="https://i.ibb.co/hdm5JBP/offer1-removebg-preview.png"/>
                            <Card.Body>
                            <Card.Title><h3>Free Bike Check-Up</h3></Card.Title>
                            <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">We have all the necessary parts to create a bike that fits you perfectly</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="py-4 mx-4 offer-card">
                        <Card.Img variant="top" className=" img-fluid rounded-4 offers-card-img mx-auto" src="https://i.ibb.co/S312cn5/offer2-removebg-preview.png"/>
                            <Card.Body>
                            <Card.Title><h3>Bike Delivery</h3></Card.Title>
                            <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">We have all the necessary parts to create a bike that fits you perfectly</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="py-4 mx-4 offer-card">
                        <Card.Img variant="top" className=" img-fluid rounded-4 offers-card-img mx-auto" src="https://i.ibb.co/gv7SnXV/offer3.png"/>
                            <Card.Body>
                            <Card.Title><h3>Bike Personal Fitting</h3></Card.Title>
                            <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">We have all the necessary parts to create a bike that fits you perfectly</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="py-4 mx-4 offer-card">
                        <Card.Img variant="top" className=" img-fluid rounded-4 offers-card-img mx-auto" src="https://i.ibb.co/HqXmktG/offer4.png"/>
                            <Card.Body>
                            <Card.Title><h3>Stationary Service Points</h3></Card.Title>
                            <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">We have all the necessary parts to create a bike that fits you perfectly</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="py-4 mx-4 offer-card">
                        <Card.Img variant="top" className=" img-fluid rounded-4 offers-card-img mx-auto" src="https://i.ibb.co/swn5kMJ/offer5-removebg-preview.png"/>
                            <Card.Body>
                            <Card.Title><h3>Parts & Accessories</h3></Card.Title>
                            <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">We have all the necessary parts to create a bike that fits you perfectly</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="py-4 mx-4 offer-card">
                        <Card.Img variant="top" className=" img-fluid rounded-4 offers-card-img mx-auto" src="https://i.ibb.co/z7xDSr8/offer6-removebg-preview.png"/>
                            <Card.Body>
                            <Card.Title><h3>Full Package Cleaning</h3></Card.Title>
                            <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">We have all the necessary parts to create a bike that fits you perfectly</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
        </>
    );
};

export default Offers;