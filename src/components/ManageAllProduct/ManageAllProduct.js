import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
// import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import './ManageAllProduct.css';

const ManageAllProduct = () => {
    // const {user} = useAuth();
    const history = useHistory();
    const [manageAllProducts, setManageAllProducts] = useState([]);
    console.log(manageAllProducts);
    useEffect(()=>{
        fetch("https://rocky-fjord-15900.herokuapp.com/manageallproducts")
        .then((res)=> res.json())
        .then((data) => setManageAllProducts(data));
    }, [manageAllProducts]);
    const handleProductDelete = (id) => {
        const proced = window.confirm('Are you Sure, Delete Your Data?');
        if (proced) {
            const url = `https://rocky-fjord-15900.herokuapp.com/deleteproduct/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire("Data Delete SuccessFull!",
                            "success"
                        )

                    }
                    history.push('/dashboard/manageallproduct');
                });
        }
    }
    return (
        <>
        <div className="container manage-all-products">
            <h1 className="text-center text-light py-3">Manage All Products</h1>
        </div>
        <section>
            <div>
            <Container>
                <Row xs={1} md={3} className="g-4 py-3">
                {
                        manageAllProducts.map(manageAllProduct => {
                            return(
                    
                <Col key={ManageAllProduct._id}>
                        <Card>
                        <Card.Img variant="top" className=" img-fluid rounded-4 packages-card-img" src={manageAllProduct?.img}/>
                            <Card.Body>
                            <Card.Title><h3>{manageAllProduct?.title}</h3></Card.Title>
                            <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">{manageAllProduct.description}</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex flex-column flex-md-row card-footer justify-content-between">
                            <h5 className="text-muted">${manageAllProduct?.price}</h5>
                            <Button onClick={()=>handleProductDelete(manageAllProduct._id)} variant="outline-danger"> Delete</Button>
                            </Card.Footer>
                        </Card>
                        </Col>
                    
                            )
                        })
                    }
                    
                </Row>
            </Container>
            </div>
        </section>
            
        </>
    );
};

export default ManageAllProduct;