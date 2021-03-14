import React from 'react';
import {ICartProduct} from "../../../types/CartProducts";
import {Button, Col, Container, Row, Image} from "react-bootstrap";
import CartProduct from "./CartProduct";
import CartBillingArea from "./CartBillingArea";
import EmptyImg from '../../../assets/images/ui/emptycheckout.png';

type cartProductListProps = {
    cartProducts: ICartProduct[]
}

const CartProductList:React.FC<cartProductListProps> = (props) => {

    const {cartProducts} = props;

    const renderCartProductList = () => {
        if (cartProducts.length === 0) {
            return (
                <Container >
                    <Image src={EmptyImg} className='p-0' fluid={true}/>
                    <Row className='justify-content-center mb-4'>
                        <Col className='text-center'>
                            <Button variant='outline-success'>Let's Shopping</Button>
                        </Col>
                    </Row>
                </Container>
            )
        } else {
            return (
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
    }

    return(
        <React.Fragment>
            {renderCartProductList()}
            { cartProducts.length !== 0 && <CartBillingArea/>}
        </React.Fragment>
    )
}

export default CartProductList;