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
import AdminProfile from "./components/adminPages/adminProfile/AdminProfile";
import AdminProductArea from "./components/adminPages/adminProductArea/AdminProductArea";
import AdminOrderArea from "./components/adminPages/adminOrders/AdminOrderArea";
import AdminOrder from "./components/adminPages/adminOrders/AdminOrder";
import AddProduct from "./components/adminPages/adminProductArea/AddProduct";

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
                    <Route path="/admin" exact component={AdminProfile}/>
                    <Route path="/admin/product" exact component={AdminProductArea}/>
                    <Route path="/admin/product/addproduct" exact component={AddProduct}/>
                    <Route path="/admin/product/addproduct/:productid" exact component={AddProduct}/>

                    <Route path="/admin/orders" exact component={AdminOrderArea} />
                    <Route path={"/admin/orders/:orderid"} exact component={AdminOrder}/>
                </Switch>
                <FooterArea/>
            </Container>
        </Router>
    )
}

export default ClientApp;