import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {AppState} from "../../../store/reducers";
import NumberFormat from "react-number-format";

const CartBillingArea:React.FC = () => {

    const cartProducts = useSelector((state: AppState) => state.cartProduct.cartProducts);
    const isDiscountApplied = false;

    const calculateSubTotal = (): number => {
        let total: number = 0;
        cartProducts.forEach((cartProduct) => {
            total += cartProduct.qty * cartProduct.product.price;
        })
        return total;
    }

    return(
        <Container className='pr-3 pt-2'>
            <Row>
                <Col className='cart-bill-title pr-0'>
                    Subtotal ({cartProducts.length} items)
                </Col>
                <Col className={'text-right cart-sub-total'}>
                    <NumberFormat value={calculateSubTotal()} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} renderText={value => <div>{value}</div>} />
                </Col>
            </Row>
            <Row>
                <Col className='cart-bill-title'>
                    Discount
                </Col>
                <Col className={'text-right cart-discount'}>
                    <NumberFormat value={isDiscountApplied? calculateSubTotal()*0.1 : 0} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'-Rs. '} renderText={value => <div>{value}</div>} />
                </Col>
            </Row>
            <hr/>
            <Row className={'mb-2'}>
                <Col className='cart-bill-title'>
                    Est. Total
                </Col>
                <Col className={'text-right cart-total'}>
                    <NumberFormat value={isDiscountApplied? calculateSubTotal()*0.9 : calculateSubTotal()} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} renderText={value => <div>{value}</div>} />
                </Col>
            </Row>
            <Button className={'cart-checkout-btn px-3'} size='sm' variant='success'>Checkout</Button>
        </Container>
    )
}

export default CartBillingArea;