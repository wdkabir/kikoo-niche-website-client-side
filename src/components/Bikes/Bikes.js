import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Bikes.css';
import Products from './Products/Products';

const Bikes = () => {
    return (
        <>
        <section className="bikes">
            <div>
                <Header></Header>
            </div>
        </section>

        <section>
            <div>
                <Container className="bikes-header">
                            <Row>
                                <div className="col-md-12 text-center mx-auto">
                                    <h1 className="bikes-header-text my-5">Ours Popular Bikes</h1>
                                </div>
                            </Row>
                </Container>
            </div>
            <Products></Products>
        </section>
        <Footer></Footer>
        </>
    );
};

export default Bikes;