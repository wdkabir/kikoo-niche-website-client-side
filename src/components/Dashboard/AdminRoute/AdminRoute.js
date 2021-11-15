import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    //AdminRoute Part
    const { user, isLoading, admin } = useAuth();
    if (isLoading) {
        return <div className='text-center my-5'><Spinner animation="border" style={{color: "tomato"}} /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName && admin ? children : <Redirect to={{
                pathname: "/dashboard",
                state: { from: location }
            }}></Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;