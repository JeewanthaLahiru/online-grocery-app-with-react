import React from 'react';
import NumberFormat from "react-number-format";
import {Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {AppState} from "../../store/reducers/index";


const CheckoutBillingArea: React.FC = () => {

    const checkoutProductList = useSelector((state: AppState) => state.cartProduct.cartProducts);
    const isDiscountApplied = useSelector((state: AppState) => state.cartProduct.isDiscounted);
    const calculateSubTotal = (): number => {
        let total: number = 0;
        checkoutProductList.forEach((cartProduct) => {
            total += cartProduct.qty * cartProduct.product.price;
        })
        return total;
    }

    return (
        <React.Fragment>
            <Row className='pl-3 pr-4 pt-md-4'>
                <Col className='bill-title'>
                    Sub Total
                </Col>
                <Col className='text-right sub-total-price'>
                    <NumberFormat value={calculateSubTotal()} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} renderText={value => <div>{value}</div>} />
                </Col>
            </Row>
            <hr/>
            <Row className='pl-3 pr-4 pt-md-2'>
                <Col className='bill-title'>
                    Discount
                </Col>
                <Col className='text-right discount-price'>
                    <NumberFormat value={isDiscountApplied? calculateSubTotal()*0.1 : 0} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'-Rs. '} renderText={value => <div>{value}</div>} />
                </Col>
            </Row>
            <Row className='pl-3 pr-4'>
                <Col className='bill-title'>
                    Delivery Charges
                </Col>
                <Col className='text-right delivery-price'>
                    <NumberFormat value={100} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} renderText={value => <div>{value}</div>} />
                </Col>
            </Row>
            <hr/>
            <Row className='pl-3 pr-4'>
                <Col className='est-bill-title'>
                    Est. Total
                </Col>
                <Col className='text-right total-price'>
                    <NumberFormat value={isDiscountApplied? calculateSubTotal()*0.9 +100 : calculateSubTotal() +100} decimalScale={2} fixedDecimalScale={true} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} renderText={value => <div>{value}</div>} />
                </Col>
            </Row>
        </React.Fragment>

    );
};

export default CheckoutBillingArea;
