import React from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import BikeService from '../Home/BikeService/BikeService';
import Mission from '../Home/Mission/Mission';
import './Home.css';
import Header from '../Shared/Header/Header';
import History from './History/History';
import Footer from '../Shared/Footer/Footer';
import Product from '../Bikes/Product/Product';
import useProducts from '../../Hooks/useProducts';

const Home = () => {
    const [products] = useProducts();
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
        {/* Services Part 4 data showing */}
        <section>
            <div className="container text-center py-5">
                <h1>Ours Popular Bikes</h1>
            </div>
            <div className="container">
            <Row xs={1} md={3} className="g-4">
                    {
                        products.slice(0,6).map(addproduct => <Product allproduct={addproduct}></Product> )
                    }
                </Row>
            </div>
            <div className="container text-center py-5">
            <Link to="/bikes"><Button className="bikes-button">View All Bikes {packageButtonIcon}</Button></Link>
            </div>
        </section>
        <BikeService></BikeService>
        <Footer></Footer>
        
        </>
    );
};

export default Home;