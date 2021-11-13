import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import './Profile.css';

const Profile = () => {
    const { user, logOut, setUser, setIsLoading } = useAuth();
    const { displayName, email, photoURL,  } = user;
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/";
    const handleLogout = () => {
        logOut()
            .then((result) => {
                setUser({})
                Swal.fire(
                    "Good job!",
                    "Log Out SuccessFull!",
                    "success"
                )
                history.push(redirect);
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <>
        <div className="container profile-header">
            <h1 className="text-center text-light py-3">Profile</h1>
        </div>
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 py-5">
                        <Card style={{ width: '18rem' }}>
                            <Image className="p-5" src={photoURL} roundedCircle />
                            <Card.Body>
                                <Card.Title>{displayName}</Card.Title>
                                <Card.Text>{email}</Card.Text>
                                <Link to="/"><Button onClick={handleLogout} variant="outline-danger">Log Out</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    );
};

export default Profile;