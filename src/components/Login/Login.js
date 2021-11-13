import React from 'react';
import { Button, Container, Form, Image } from 'react-bootstrap';
import './Login.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Login = () => {
    const signInIcon = <FontAwesomeIcon icon={faSignInAlt} />
    const history = useHistory();
    const location = useLocation();
    const { processLogin, handleEmailChange, handlePasswordChange } = UseFirebase();
    
    const Redirect = location?.state?.from || "/dashboard";
    const { signinGoogle, setIsLoading } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        processLogin()
        .then(result => {
            Swal.fire("Good job!",
                "Log In SuccessFull!",
                "success"
            )
            history.push(Redirect);

        })
        .catch((error) => {
            Swal.fire(
                "Something went wrong!",
                `${error.message}`,
                "error"
            )
        })
        .finally(() => setIsLoading(false));
    }
    const handleGoogleLogin = () => {
        signinGoogle()
            .then(result => {
                Swal.fire("Good job!",
                    "Log In SuccessFull!",
                    "success"
                )
                history.push(Redirect);

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
        <section className="login-header">
                <div>
                    <Header></Header>
                </div>
        </section>
        <section className="login-section">
        <div>
            <Container>
                <div className="col-md-4"></div>
                <div className="col-md-4 mx-auto my-5">
                <Form className="login px-4 py-4" onSubmit={handleLogin}>
                        <Form.Text className="text-center">
                            <h1 className="py-3">Login Here</h1>
                        </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className="w-100">
                        Login {signInIcon}
                    </Button>
                    <div className="mt-3 mb-3 text-center fs-4 fw-bolder col-md-12" >
                        <Button onClick={handleGoogleLogin} variant="outline-danger" size="lg" className="text-dark google-btn"><Image  width="40"
                            height="40"
                            className="d-inline-block" src="https://i.ibb.co/Vvfr28P/google-icon.png" /> Continue With Google</Button>
                    </div>
                        <div className="link mt-3">
                                <Link to="/registration"><Button variant="outline-info" type="submit" className="w-100">
                                Not a member? Sign up Here</Button></Link>
                        </div>
                    </Form>
                </div>
                <div className="col-md-4"></div>
            
            </Container>

            {/* Login section ends  */}

        </div>
        </section>
        <Footer></Footer>
        
        </>
    );
};

export default Login;