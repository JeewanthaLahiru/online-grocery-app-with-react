import React from 'react';
import {Container} from "react-bootstrap";
import HeaderArea from "./components/homePage/headerArea/HeaderArea";
import FooterArea from "./components/homePage/footerArea/FooterArea";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import HomePage from "./components/homePage/HomePage";
import CheckoutArea from "./components/checkoutPage/CheckoutArea";
import Register from "./components/UserPages/Register/Register";
import Login from "./components/UserPages/login/Login";
import AdminApp from "./components/adminPages/AdminApp";
import AdminProfile from "./components/adminPages/adminProfile/AdminProfile";
import AdminHeader from "./components/adminPages/adminHeader/AdminHeader";

const ClientApp:React.FC = () => {
    return(
        <Router>
            <Container fluid={true} className="m-0 p-0" >
                <HeaderArea/>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/checkout" exact component={CheckoutArea} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login}/>
                    <Route path="/admin" exact component={AdminApp}/>
                    <Route path="/admin/profile" exact component={AdminProfile}/>
                </Switch>
                <FooterArea/>
            </Container>
        </Router>
    )
}

export default ClientApp;