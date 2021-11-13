import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const {user} = useAuth();
    const history = useHistory();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myorders/${user?.email}`)
        .then((res)=> res.json())
        .then((data) => setMyOrders(data));
    }, [user?.email]);
    const handleOrderDelete = (id) => {
        const proced = window.confirm('Are you Sure, Delete Your Data?');
        if (proced) {
            const url = `http://localhost:5000/orderdelete/${id}`;

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
                    history.push('/dashboard/myorders');
                });
        }
    }
    return (
        <>
    <div className="container my-orders">
        <h1 className="text-center text-light py-3">My Orders</h1>
    </div>
        <div className="py-5">
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        myOrders.map(myorder => {
                            return(
                    <Col key={myorder._id}>
                        <Card>
                        <Card.Img variant="top" className=" img-fluid rounded-4 packages-card-img" src={myorder?.orderplace?.img}/>
                            <Card.Body>
                            <Card.Title><h3>{myorder?.orderplace?.title}</h3></Card.Title>
                            <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">{myorder?.orderplace?.description}</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex flex-column flex-md-row card-footer justify-content-between">
                            <h5 className="text-muted">${myorder?.orderplace?.price}</h5>
                            <Button onClick={()=>handleOrderDelete(myorder._id)} variant="outline-danger"> Delete</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                            )
                        })
                    }
                
                </Row>
            </Container>
        </div>
        
    </>
    );
};

export default MyOrders;