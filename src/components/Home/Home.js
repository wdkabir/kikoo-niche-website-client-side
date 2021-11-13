import React from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import BikeService from '../Home/BikeService/BikeService';
import Mission from '../Home/Mission/Mission';
import './Home.css';
import Header from '../Shared/Header/Header';
import Products from '../Bikes/Products/Products';
import History from './History/History';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    const mapIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const packageButtonIcon = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <>
        <section className="bannar">
            <div>
                <Header></Header>
            </div>
            <div>
                <Container className="banner-bikes text-center">
                            <Row>
                                <div className="col-md-12">
                                    <h1 className="banner-bikes-text">Discover The Joy Of Cycling</h1>
                                    <Link to="/bikes"><Button className="bikes-button mt-5 py-3">View All Bikes {packageButtonIcon}</Button></Link>
                                </div>
                            </Row>
                </Container>
            </div>

        </section>
        <section className="header-subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 py-5 header-map">
                    <h2 className="text-light">{mapIcon} 326 South 8th ave, New York</h2>
                    </div>
                    <div className="col-md-6 py-5 header-subscribe-form">
                    <InputGroup className="">
                                <FormControl
                                    placeholder="Your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className="py-3"
                                />
                                <Button variant="info" onClick={(e) => { e.preventDefault() }} id="button-addon2">
                                    Subscribe Now!
                                </Button>
                            </InputGroup>
                    </div>
                </div>
            </div>
        </section>
        <Mission></Mission>
        <History></History>
        <div className="container">
            <h1 className="text-center py-3">Our Popular Bikes</h1>
            <Products></Products>
        </div>
        <BikeService></BikeService>
        <Footer></Footer>
        
        </>
    );
};

export default Home;