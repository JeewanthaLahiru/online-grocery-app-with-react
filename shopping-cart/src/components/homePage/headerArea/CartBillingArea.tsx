import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

const CartBillingArea:React.FC = () => {
    return(
        <Container className='pr-3 pt-2'>
            <Row>
                <Col className='cart-bill-title pr-0'>
                    Subtotal (3 items)
                </Col>
                <Col className={'text-right cart-sub-total'}>
                    Rs. 3,585.00
                </Col>
            </Row>
            <Row>
                <Col className='cart-bill-title'>
                    Discount
                </Col>
                <Col className={'text-right cart-discount'}>
                    Rs. 0.00
                </Col>
            </Row>
            <hr/>
            <Row className={'mb-2'}>
                <Col className='cart-bill-title'>
                    Est. Total
                </Col>
                <Col className={'text-right cart-total'}>
                    Rs. 3,585.00
                </Col>
            </Row>
            <Button className={'cart-checkout-btn px-3'} size='sm' variant='success'>Checkout</Button>
        </Container>
    )
}

export default CartBillingArea;