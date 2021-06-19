import React from "react";
import {useParams} from "react-router-dom";
import {orders} from "../../../repository/Orders";
import {Button, Col, Row, Form} from "react-bootstrap";
import {IPurchasedItems} from "../../../types/Orders";
import OrderProductItem from "./OrderProductItem";

interface ParamTypes{
    orderid:string
}

const AdminOrder:React.FC = () => {
    const {orderid} = useParams<ParamTypes>();

    const SelectedOrder:any = orders.find(({orderId}) => orderId == orderid);
    const orderedProducts: IPurchasedItems[] = SelectedOrder.purchasedItems;
    const showOrders = () => {
        console.log(orderedProducts);
    }
    const renderProducts = () => {
        orderedProducts.map((orderItem, index:number) => {
            console.log(orderItem.itemName);
            return <OrderProductItem key={index} product={orderItem}/>;
        })
    }

    return(
        <React.Fragment>
            <Row className="mx-0 order-view justify-content-center">
                <Col xs={12} md={10} xl={7}>
                    <Row className="mx-0 back-row my-3">
                        <Col xs={12}>
                            <h1 className="text-left">
                                <i className="feather icon-chevron-left" />
                                &nbsp;&nbsp;Back to orders
                            </h1>
                        </Col>
                    </Row>
                    <Row className="mx-0 title-row">
                        <Col xs={6}>
                            <h5 className="text-left" >Order {SelectedOrder.orderId}</h5>
                            <h6 className="text-left" >Order created at 6/1/2021, 6:42:24</h6>
                        </Col>
                        <Col xs={6}>
                            <Button
                                onClick={showOrders}
                                variant={"success"}
                                className="float-right px-5"
                            >
                                Accept
                            </Button>
                            <Button
                                variant={"success"}
                                className="mr-3 float-right px-5"
                            >
                                Reject
                            </Button>
                        </Col>
                    </Row>
                    <Row className="order-body mx-0 my-5">
                        <Col xs={6} className="order-body-left">
                            <Form.Group >
                                <Form.Label className="float-left">Customer</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    value={SelectedOrder.deliveryDetails.name}
                                    disabled={true}
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className="float-left" >Contact Details</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    disabled={true}
                                    value={SelectedOrder.deliveryDetails.contact + "\n("
                                        + SelectedOrder.email + ")" }
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className="float-left" >Delivery Address</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    disabled={true}
                                    value={SelectedOrder.deliveryDetails.streetAddress + "\n"
                                        + SelectedOrder.deliveryDetails.city + "\n"
                                        + SelectedOrder.deliveryDetails.country + "\n"
                                        + SelectedOrder.deliveryDetails.postalCode
                                    }
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className="float-left">Instructions</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    disabled={true}
                                    value={SelectedOrder.instructions}
                                />
                            </Form.Group>

                        </Col>
                        <Col xs={6} className="order-body-right" >
                            <Row className="mx-0 mt-4 p-0">
                                <Col xs={12} className="order-products m-0 p-0">
                                    <Row className="mx-0">
                                        {orderedProducts.map((orderItem, index:number) => {
                                            console.log(orderItem.itemName);
                                            return <OrderProductItem key={index} product={orderItem}/>;
                                        })}
                                    </Row>
                                </Col>
                                <Col xs={12} className="order-price mx-0 mt-3 p-0">
                                    <table>
                                        <tr>
                                            <td className="text-left">Payment Status</td>
                                            <td className="text-right text-success">{SelectedOrder.orderStatus}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Delivery Charge</td>
                                            <td className="text-right">Rs.100</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Discount</td>
                                            <td className="text-right">Rs.200</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Subtotal</td>
                                            <td className="text-right">Rs.{SelectedOrder.subTotal}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Total</td>
                                            <td className="text-right" >Rs.{ Number(SelectedOrder.subTotal)  +100 - 200}</td>
                                        </tr>
                                    </table>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AdminOrder;