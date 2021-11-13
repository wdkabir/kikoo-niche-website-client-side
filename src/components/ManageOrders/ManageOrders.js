import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import './ManageOrders.css';

const ManageOrders = () => {
    const { user } = useAuth();
    const { displayName } = user;

    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/manageorders')
        .then((res) => res.json())
        .then((data) => setManageOrder(data));
    });
    // const handleDelete = (id) => {
    //     const proced = window.confirm('Are you Sure, Delete Your Data?');
    //     if (proced) {
    //         const url = `http://localhost:5000/allorderdelete/${id}`;

    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     Swal.fire(
    //                         "Data Delete SuccessFull!",
    //                         "success"
    //                     )

    //                 }
    //             })
    //     }
    // }

    const handleUpdate = (id) => {
        const url = `http://localhost:5000/placeorder/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(manageOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
            
                    Swal.fire("WoW!",
                        "Status Update SuccessFull!",
                        "success"
                    )
                }
            })
    }
    return (
        <>
        <div className="container manage-orders">
            <h1 className="text-center text-light py-3">Manage Orders</h1>
        </div>
        <Container className="py-5">
            <Row xs={12} md={12} className="g-4 mx-auto">
                            <Col>
                            <Table striped bordered hover responsive className="mx-0 my-0">
                                <thead>
                                    <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Name</th>
                                    <th>Order Status</th>
                                    <th>Cancel Order</th>
                                    </tr>
                                </thead>
                                <tbody>
                            {
                                manageOrder.map(myorder => {
                                    return(
                                    <tr key={myorder._id}>
                                    <td><Image style= {{height: '50px', width: '80px'}} src={myorder?.orderplace?.img} fluid /></td>
                                    <td>{myorder?.orderplace?.title}</td>
                                    <td>{displayName}</td>
                                    <td>{myorder.status}</td>
                                    <td><Button onClick={()=>handleUpdate(myorder._id)} variant="outline-danger">Approve</Button></td>
                                    </tr>
                                    )
                                    })
                                }
                                </tbody>
                            </Table>
                        </Col>
            </Row>
        </Container>
        </>
    );
};

export default ManageOrders;