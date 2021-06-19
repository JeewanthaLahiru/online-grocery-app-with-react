import React from "react";
import {IPurchasedItems} from "../../../types/Orders";
import {Col, Image, Row} from "react-bootstrap";
import SampleImg from "../../../assets/images/products/coconut.jpg";

type OrderProductItemProps = {
    product: IPurchasedItems;
}

const OrderProductItem:React.FC<OrderProductItemProps> = (props) => {
    return(
        <React.Fragment>
            <Col xs={12} className="order-product-item">
                <Row className="m-0 p-0 item-id">
                    <Col xs={12}>
                        <h6 className="text-left">Product id: {props.product.itemId}</h6>

                    </Col>
                </Row>
                <Row className="m-0 p-0 item-body">
                    <Col xs={3}>
                        <Image src={SampleImg} />
                    </Col>
                    <Col xs={9}>
                        <table>
                            <tr>
                                <td className="text-left name">{props.product.itemName}</td>
                                <td className="text-right price" >Qty: {props.product.itemQty}</td>
                            </tr>
                            <tr>
                                <td className="text-left qty" >price: Rs.{props.product.itemPrice}</td>
                                <td className="text-right total" >Total: Rs.
                                    {
                                        parseFloat(
                                            (Number(props.product.itemPrice) * Number(props.product.itemQty))
                                                .toString()).toFixed(2)
                                    }</td>
                            </tr>
                        </table>
                    </Col>
                </Row>
                <hr/>
            </Col>
        </React.Fragment>
    )
}

export default OrderProductItem;