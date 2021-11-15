import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import History from '../Home/History/History';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './About.css';

const About = () => {
    //About Section
    return (
        <>
        <section className="about">
            <div>
                <Header></Header>
            </div>
        </section>
        <div>
                <Container className="about-header">
                            <Row>
                                <div className="col-md-12 text-center mx-auto">
                                    <h1 className="about-header-text py-5">About Us</h1>
                                </div>
                            </Row>
                </Container>
            </div>
        <section className="mb-3">
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-md-6" style={{ textAlign: "left"}}>
                        <h1 className="my-4" style={{color: 'tomato'}}>Our Mission</h1>
                        <p className="my-4">We’re a bike shop, a family and a team of riders, helping folks in New York explore their passion for cycling. Biking is more than transportation or exercise, it’s a lifestyle. Whether you need help with where to ride or are in need.</p>
                        <div className="my-4">
                                    <p className="fw-bolder mb-2 text-muted">Reduced anxiety and depression</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted">Decreased body fat levels</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted">Increased cardiovascular fitness</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                    </div>
                                </div>
                    </div>
                    <div className="col-md-6">
                    <Image src="https://i.ibb.co/MNSYqzy/pexels-pixabay-163491.jpg" fluid />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <History></History>
        </section>
        <Footer></Footer>
        </>
    );
};

export default About;