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

const ClientApp:React.FC = () => {
    return(
        <Router>
            <Container fluid={true} className="m-0 p-0" >
                <HeaderArea/>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/checkout" exact component={CheckoutArea} />
                </Switch>
                <FooterArea/>
            </Container>
        </Router>
    )
}

export default ClientApp;