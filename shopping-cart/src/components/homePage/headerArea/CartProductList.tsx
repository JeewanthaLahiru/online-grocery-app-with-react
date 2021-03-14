import React from 'react';
import {ICartProduct} from "../../../types/CartProducts";
import {Container} from "react-bootstrap";
import CartProduct from "./CartProduct";

type cartProductListProps = {
    cartProducts: ICartProduct[]
}

const CartProductList:React.FC<cartProductListProps> = (props) => {

    const {cartProducts} = props;

    return(
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
    )
}

export default CartProductList;