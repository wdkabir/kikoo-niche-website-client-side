import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Button, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const signIn = <FontAwesomeIcon icon={faSignInAlt} />
    const signOut = <FontAwesomeIcon icon={faSignOutAlt} />
    const activeMenu = {
        fontWeight: "bold",
        color: "tomato",
    }
    const { user, logOut, setUser, setIsLoading } = useAuth();
    const { displayName, photoURL } = user;
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
        <section className="py-5">
            <div>
                <Container>
                    <Row>
                        <div className="col-md-12">
                        <Navbar bg="white" expand="lg" sticky="top" className="header-navbar">
                            <Container>
                                <Navbar.Brand>
                                    <Nav.Link as={NavLink} to="/">
                                    <img
                                        src="https://i.ibb.co/9VvhWhX/kikoo-website-logo.png"
                                        width="120"
                                        height="50"
                                        className="d-inline-block align-top"
                                        alt="kikoo-logo"
                                    />
                                    </Nav.Link>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto align-items-center">
                                        <Nav.Link as={NavLink} to="/home" activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold px-3">Home</Nav.Link>
                                        <Nav.Link as={NavLink} to="/about" activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold px-3">About</Nav.Link>
                                        <Nav.Link as={NavLink} to="/bikes" activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold px-3">Bikes</Nav.Link>
                                        <Nav.Link as={NavLink} to="/services" activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold px-3">Services</Nav.Link>
                                        
                                        <Nav.Link as={NavLink} to="/contact" activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold px-3">Contact</Nav.Link>
                                        
                                        
                                        {!user.displayName ? (
                                            <>
                                                <Nav.Link as={NavLink} to="/login" activeStyle={
                                                    activeMenu
                                                } className="fs-6 fw-bold px-3">
                                                    <Button style={{backgroundColor: 'tomato', border: 'none'}} className="text-btn fs-6 fw-bold">
                                                        Login {signIn}
                                                    </Button>
                                                </Nav.Link>
                                            </>
                                        ) : (
                                            <>
                                            <Nav.Link as={NavLink} to="/dashboard" activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold px-3">Dashboard</Nav.Link>
                                            <NavDropdown
                                                title={
                                                    <img
                                                        style={{
                                                            width: "45px",
                                                            borderRadius: "50%",
                                                        }}
                                                        src={photoURL}
                                                        alt=""
                                                    />
                                                }
                                            >
                                                <div className="text-center">
                                                    <h6>{displayName}</h6>
                                                    <button onClick={handleLogout} className="btn btn-danger">
                                                        Log Out {signOut}
                                                    </button>
                                                </div>
                                            </NavDropdown>
                                            </>
                                        )}
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        </div>
                    </Row>
                </Container>
            </div>
        
        </section>
        </>
    );
};

export default Header;