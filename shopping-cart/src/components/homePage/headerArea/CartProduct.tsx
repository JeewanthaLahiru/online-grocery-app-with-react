import React from "react";
import {ICartProduct} from "../../../types/CartProducts";
import {Col, Row, Image} from "react-bootstrap";

type CartProductProps = {
    cartProduct: ICartProduct,
}

const CartProduct:React.FC<CartProductProps> = (props) => {
    const {cartProduct} = props;

    return(
        <Row className={'cart-product'}>
            <Col xs={4} className={'pr-0'}>
                <Image className='cart-product-img' src={cartProduct.product.image} rounded={true}/>
            </Col>
            <Col xs={8}>
                <Row>
                    <Col xs={10} className={'mb-1 mb-sm-2 cart-product-title'}>
                        {cartProduct.product.name}
                    </Col>
                    <Col xs={2} className={'mb-1 mb-sm-2 text-center p-0 pr-2 m-0'}>
                        <i className="feather icon-trash" />
                    </Col>
                </Row>
                <Row className='mt-1 mt-sm-2'>
                    <Col xs={4} className='cart-product-qty'>
                        Qty: {cartProduct.qty}
                    </Col>
                    <Col xs={8} className='cart-product-price text-right'>
                        Rs. {cartProduct.product.price*cartProduct.qty}.00
                    </Col>
                </Row>
            </Col>
            <hr/>
        </Row>
    )
}

export default CartProduct;