import React from 'react';
import CheckoutProductList from "./CheckoutProductList";
import {Col, Container, Row} from "react-bootstrap";
import DeliveryArea from "./DeliveryArea";

const CheckoutArea:React.FC = () => {
    return(
        <Container fluid={'lg'} className='checkout-container pt-3 pb-5 px-lg-5'>
            <Row>
                <Col className='checkout-title'>
                    <h2 className='pl-1 text-center text-md-left'>Checkout</h2>
                </Col>
            </Row>
            <div className="table-area">
                <h5 className='text-center text-md-left shopping-cart-title'>Shopping Cart</h5>
                <CheckoutProductList/>
            </div>
            <DeliveryArea/>
        </Container>
    )
}

export default CheckoutArea;