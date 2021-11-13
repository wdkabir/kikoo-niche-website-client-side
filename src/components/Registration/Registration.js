import React from 'react';
import './Registration.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Form, Image } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Registation = () => {
    const signInIcon = <FontAwesomeIcon icon={faSignInAlt} />
    const History = useHistory();
    const Location = useLocation();
    const Redirect = Location?.state?.from || "/";
    const { signinGoogle, setError, setUserName, registerNewUser, handleNameChange, handleEmailChange, handlePasswordChange, handleImageChange, setIsLoading, saveUser } = useAuth();

    const handleRegister = (e) => {
        e.preventDefault();
        registerNewUser()
            .then(result => {
                console.log(result)
                setUserName();
               setTimeout(() => {
                History.push(Redirect);
               }, 3000);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleGoogleReg = () => {
        signinGoogle()
            .then(result => {
                saveUser(result.user.email, result.user.displayName, 'PUT');
                Swal.fire("Good job!",
                    "Log In SuccessFull!",
                    "success"
                )
                History.push(Redirect);

            }).finally(() => setIsLoading(false))
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }

    

    return (
        <>
        <section className="registration-header">
                <div>
                    <Header></Header>
                </div>
        </section>
        <div>
            {/* Registation section starts  */}

             <Container>
                <div className="col-md-4"></div>
                <div className="col-md-4 mx-auto my-5">
                <Form className="registration" onSubmit={handleRegister}>
                        <Form.Text className="text-center">
                            <h1 className="py-3">Registration</h1>
                        </Form.Text>
                
                    <Form.Group as={Col} controlId="formGridName" className="mb-3">
                    <Form.Control onBlur={handleNameChange} type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridImage" className="mb-3">
                    <Form.Control onBlur={handleImageChange} type="text" placeholder="Add Image URL"/>
                    </Form.Group>
                


                <Button variant="primary" type="submit" className="w-100">
                    Sign Up
                </Button>
                <div className="mt-3 mb-3 text-center fs-4 fw-bolder col-md-12" >
                        <Button onClick={handleGoogleReg} variant="outline-danger" size="lg" className="text-dark google-btn"><Image  width="40"
                            height="40"
                            className="d-inline-block" src="https://i.ibb.co/Vvfr28P/google-icon.png" /> Continue With Google</Button>
                    </div>
                        <div className="link mt-3">
                                <Link to="/login"><Button variant="outline-info" className="w-100">
                                Already Have An Account? Login Here {signInIcon}</Button></Link>
                        </div>
            </Form>
                </div>
                <div className="col-md-4"></div>
            </Container>

            {/* Registation section ends  */}
        </div>
        <Footer></Footer>
        </>
    );
};

export default Registation;