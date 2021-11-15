import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Contact.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    //Contact Section
    return (
        <>
        <section className="contact-header">
            <div>
                <Header></Header>
            </div>
        </section>
        <section className="py-5 contact">
        <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <Form className="contact-form">
                    <Form.Text className="text-center">
                            <h1 className="py-3">Contact Us</h1>
                        </Form.Text>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control placeholder="Address" />
                        </Form.Group>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Control placeholder="City" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control placeholder="State" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Control placeholder="Zipcode" />
                            </Form.Group>
                        </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                 <Form.Control as="textarea" rows={3} placeholder="Massage"/>
                            </Form.Group>

                        <Button className="w-100" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    );
};

export default Contact;