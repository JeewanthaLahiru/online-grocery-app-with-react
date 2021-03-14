import React from 'react';
import {Container} from "react-bootstrap";
import HeaderArea from "./components/homePage/headerArea/HeaderArea";
import BannerArea from "./components/homePage/bannerArea/BannerArea";
import SearchArea from "./components/homePage/searchArea/SearchArea";
import CategoryListArea from "./components/homePage/categoryListArea/CategoryListArea";
import ProductList from "./components/homePage/productArea/ProductList";
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
                    <Route component={HomePage} />
                </Switch>
            </Container>
        </Router>
    )
}

export default ClientApp;