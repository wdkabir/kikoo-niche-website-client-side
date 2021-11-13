import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faShoppingCart, faTasks, faHome, faCartPlus, faSignOutAlt, faUserCog, faTools } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import About from '../../About/About';
import Profile from '../Profile/Profile';
import MyOrders from '../../MyOrders/MyOrders';
import ManageOrders from '../../ManageOrders/ManageOrders';
import './Dashboard.css';
import AddProducts from '../../AddProducts/AddProducts';
import ManageAllProduct from '../../ManageAllProduct/ManageAllProduct';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';

const Dashboard = () => {
    const profileIcon = <FontAwesomeIcon icon={faUserAlt} />
    const myOrdersIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const manageOrdersIcon = <FontAwesomeIcon icon={faTasks} />
    const backToHomeIcon = <FontAwesomeIcon icon={faHome} />
    const addProductsIcon = <FontAwesomeIcon icon={faCartPlus} />
    const logOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
    const makeAdminIcon = <FontAwesomeIcon icon={faUserCog} />
    const manageAllProductsIcon = <FontAwesomeIcon icon={faTools} />
    let { path, url } = useRouteMatch();
    const { logOut, setUser, setIsLoading } = useAuth();
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
    const activeMenu = {
        fontWeight: "bold",
        color: "tomato",
    }
    return (
        <>
            
            <section className="dashboard py-0 px-0 w-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 py-0 px-0 dashboard-sidebar">
                    <Navbar expand="lg" sticky="top" className="dashboard-navbar">
                            <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="flex-column mx-auto">
                                    <Nav.Link as={NavLink} to="/dashboard" className="py-3 text-center">
                                    <img
                                        src="https://i.ibb.co/9VvhWhX/kikoo-website-logo.png"
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top"
                                        alt="kikoo-logo"
                                    />
                                    </Nav.Link>
                                        {/* <Nav.Link as={NavLink} to={`${url}`} activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold py-3">{dashboardIcon} Dashboard</Nav.Link> */}
                                        <Nav.Link as={NavLink} to={`${url}/makeadmin`} activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold py-3">{makeAdminIcon} Make Admin</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/profile`} activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold py-3">{profileIcon} Profile</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/myorders`} activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold py-3">{myOrdersIcon} My Orders</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/manageorders`} activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold py-3">{manageOrdersIcon} Manage Orders</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/addproducts`} activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold py-3">{addProductsIcon} Add Products</Nav.Link>
                                        <Nav.Link as={NavLink} to={`${url}/manageallproduct`} activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold py-3">{manageAllProductsIcon} Manage All Products</Nav.Link>
                                        <Nav.Link as={NavLink} to="/" activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold py-3">{backToHomeIcon} Back To Home</Nav.Link>
                                        <Nav.Link as={NavLink} to="/" activeStyle={
                                            activeMenu
                                        } className="fs-6 fw-bold py-5"><Button onClick={handleLogout} variant="outline-danger">Log Out {logOutIcon}</Button></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    <div className="col-md-9 py-0 px-0">
                        <Switch>
                            <Route exact path={path}>
                                    <About></About>
                            </Route>
                            <Route path={`${path}/profile`}>
                                   <Profile></Profile>   
                            </Route>
                            <Route path={`${path}/myorders`}>
                                   <MyOrders></MyOrders>  
                            </Route>
                            <Route path={`${path}/manageorders`}>
                                   <ManageOrders></ManageOrders> 
                            </Route>
                            <Route path={`${path}/addproducts`}>
                                   <AddProducts></AddProducts>
                            </Route>
                            <Route path={`${path}/manageallproduct`}>
                                   <ManageAllProduct></ManageAllProduct>
                            </Route>
                            <Route path={`${path}/makeadmin`}>
                                   <MakeAdmin></MakeAdmin>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Dashboard;