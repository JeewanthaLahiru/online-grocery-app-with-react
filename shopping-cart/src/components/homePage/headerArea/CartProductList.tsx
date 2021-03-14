import React from 'react';
import {ICartProduct} from "../../../types/CartProducts";
import {Container} from "react-bootstrap";
import CartProduct from "./CartProduct";
import CartBillingArea from "./CartBillingArea";

type cartProductListProps = {
    cartProducts: ICartProduct[]
}

const CartProductList:React.FC<cartProductListProps> = (props) => {

    const {cartProducts} = props;

    return(
        <React.Fragment>
            <Container className='cart-product-list'>
                {cartProducts.map((cartProduct: ICartProduct, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <CartProduct cartProduct={cartProduct}/>
                            <hr/>
                        </React.Fragment>
                    )
                })}
            </Container>
            <CartBillingArea/>
        </React.Fragment>
    )
}

export default CartProductList;