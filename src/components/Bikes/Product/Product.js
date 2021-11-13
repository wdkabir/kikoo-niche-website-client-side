import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //Destructuring part
    const  {_id, title, description, price, img} = props.allproduct;
    return (
                    <Col>
                        <Card className="bike-card">
                        <Card.Img variant="top" className=" img-fluid rounded-4 bikes-card-img" src={img}/>
                            <Card.Body>
                            <Card.Title><h3>{title}</h3></Card.Title>
                        <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">{description}</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex flex-column flex-md-row card-footer justify-content-between">
                            <h5 style={{color: 'tomato'}}>${price}</h5>
                            <Link to={`/placeorder/${_id}`}><Button style={{backgroundColor: 'tomato', border: 'none'}}> Buy Now</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
    );
};

export default Product;