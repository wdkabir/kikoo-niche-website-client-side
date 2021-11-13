import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Bikes from './components/Bikes/Bikes';
import Registation from './components/Registration/Registration';
import Services from './components/Services/Services';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import Notfound from './components/NotFound/Notfound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/bikes">
              <Bikes></Bikes>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registation></Registation>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
