import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
// import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const handleUpdate = (id) => {
        const url = `https://rocky-fjord-15900.herokuapp.com/users/${id}`;
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
    // const {user} = useAuth();
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() =>{
        fetch('https://rocky-fjord-15900.herokuapp.com/users')
        .then((res) => res.json())
        .then((data) => setManageOrder(data));
    });
    return (
        <>
        <div className="container manage-orders">
            <h1 className="text-center text-light py-3">Make Admin</h1>
        </div>
        <Container className="py-5">
            <Row xs={12} md={12} className="g-4 mx-auto">
                            <Col>
                            <Table striped bordered hover responsive className="mx-0 my-0">
                                <thead>
                                    <tr>
                                    {/* <th>Image</th> */}
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>User Role</th>
                                    <th>Make Admin</th>
                                    </tr>
                                </thead>
                                <tbody>
                            {
                                manageOrder.map(myorder => {
                                    return(
                                    <tr key={myorder._id}>
                                    {/* <td><Image style= {{height: '50px', width: '80px'}} src={user?.photoURL} fluid /></td> */}
                                    <td>{myorder?.displayName}</td>
                                    <td>{myorder?.email}</td>
                                    <td>{myorder?.role === 'admin' ? (<h6 className="text-success fw-bolder">
                                            {myorder?.role} 
                                        </h6>) : (<h6 className="text-danger fw-bolder">
                                            {myorder?.role}{"basic"}
                                        </h6>)}</td>
                                    <td><Button onClick={()=>handleUpdate(myorder._id)} variant="outline-info">Make Admin</Button></td>
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

export default MakeAdmin;