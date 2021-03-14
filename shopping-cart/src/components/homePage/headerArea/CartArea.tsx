import React from "react";
import {Dropdown, Row, Col, Image, Badge, OverlayTrigger, Popover} from "react-bootstrap";
import {products} from "../../../repository/Products";
import CartProductList from "./CartProductList";
import {ICartProduct} from "../../../types/CartProducts";

const CartArea:React.FC = () => {

    const cartProducts: ICartProduct[] = [
        {
            id:1,
            product:products[0],
            qty:2
        },
        {
            id:2,
            product:products[1],
            qty:2
        },
        {
            id:3,
            product:products[2],
            qty:2
        }
    ]

    return(
        <OverlayTrigger
            trigger="click"
            key={'bottom'}
            placement={'bottom'}
            overlay={
                <Popover id={`popover-positioned-${'bottom'}`}>
                    <Popover.Content className={'px-3 pt-3'}>
                        <CartProductList cartProducts={cartProducts}/>
                    </Popover.Content>
                </Popover>
            }
            rootClose
            rootCloseEvent={'click'}
        >
            <Row>
                <Col className="notification-btn pt-1" >
                    <i className="feather icon-shopping-cart cart-icon">
                        <Badge variant='light' className='item-count text-white'>0</Badge>
                    </i>
                </Col>
            </Row>
        </OverlayTrigger>
    )
}

export default CartArea;