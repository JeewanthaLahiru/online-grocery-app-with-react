import React from 'react';
import CheckoutProductList from "./CheckoutProductList";
import {Col, Container, Row} from "react-bootstrap";
import DeliveryArea from "./DeliveryArea";
import {useSelector} from "react-redux";
import {AppState} from "../../store/reducers";

const CheckoutArea:React.FC = () => {

    const cartCount = useSelector((state:AppState)=> state.cartProduct.cartProducts);

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
            {cartCount.length > 0 &&
                <DeliveryArea/>
            }

        </Container>
    )
}

export default CheckoutArea;