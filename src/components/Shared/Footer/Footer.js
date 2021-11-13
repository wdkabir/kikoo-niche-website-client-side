import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#df453e",
        textDecoration: "underline",
    };
    return (
        <div
            style={{ backgroundColor: "#335154" }}
            className="text-light">
            <div className="container text-center">
                <div className="row pt-4 pb-2">
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <img style={{height: "80px", width: "180px"}} className='mb-3' src="https://i.ibb.co/9VvhWhX/kikoo-website-logo.png" alt="" />
                        <p>
                        Welcome to Kikoo! We are one of the biggest bicycle-families in the world. Our services include all types of repair, search of a perfect bike for every customer, sport events organization and much more. Join our community and become a part of the bike-family.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mt-5">
                        <h4>TOP BIKE BRANDS</h4>
                        <span>Trek Bicycle</span>
                        <br />
                        <span>Connondale</span>
                        <br />
                        <span>Kona Bikes</span>
                        <br />
                        <span>Colnago</span>
                        <br />
                        <span>Bianchi</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mt-5">
                        <h4>USEFUL LINKS</h4>
                        <NavLink
                            className="text-light text-decoration-none"
                            activeStyle={activeStyle}
                            to="/home"
                        >
                            Home
                        </NavLink>
                        <br />
                        <NavLink
                            className="text-light text-decoration-none"
                            activeStyle={activeStyle}
                            to="/bikes"
                        >
                            Bikes
                        </NavLink>
                        <br />
                        <NavLink
                            className="text-light text-decoration-none"
                            activeStyle={activeStyle}
                            to="/about"
                        >
                            About us
                        </NavLink>
                        <br />
                        <NavLink
                            className="text-light text-decoration-none"
                            activeStyle={activeStyle}
                            to="/services"
                        >
                            Services
                        </NavLink>
                        <br />
                        <NavLink
                            className="text-light text-decoration-none"
                            activeStyle={activeStyle}
                            to="/contact"
                        >
                            Contact us
                        </NavLink>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4 mt-5 text-center">
                        <h4>FOLLOW US</h4>
                        <p>
                            Subscribe Now! For Get Our Latest Update
                        </p>
                        <div className="mt-4">
                            <h4>SUBSCRIBE NOW</h4>
                            <InputGroup className="py-3">
                                <FormControl
                                    placeholder="Your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button className="subscribe-btn" onClick={(e) => { e.preventDefault() }} id="button-addon2">
                                    Subscribe Now!
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container pb-3">
                    <h5 className="text-center ">
                        Copyright &copy; <span
                            style={{ color: "tomato" }}
                            className=" mt-2 d-inline-block"> Kikoo
                        </span> 2021 | All rights reserved |
                        Developed By {" "}
                        <span
                            style={{ color: "tomato" }}
                            className=" mt-2 d-inline-block"> Kabir Hossain
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;