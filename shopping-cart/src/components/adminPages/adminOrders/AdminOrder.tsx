import React from "react";
import {useParams} from "react-router-dom";
import {orders} from "../../../repository/Orders";
import {Button, Col, Row, Form} from "react-bootstrap";

interface ParamTypes{
    orderid:string
}

const AdminOrder:React.FC = () => {
    const {orderid} = useParams<ParamTypes>();

    const SelectedOrder:any = orders.find(({orderId}) => orderId == orderid);

    return(
        <React.Fragment>
            <Row className="mx-0 order-view justify-content-center">
                <Col xs={12} md={10} xl={7}>
                    <Row className="mx-0 back-row">
                        <Col xs={12}>
                            <h1 className="text-left">
                                <i className="feather icon-arrow-left" />
                                Back to orders
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
                                <Form.Label>Customer</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    value={SelectedOrder.deliveryDetails.name}
                                    disabled={true}
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Contact Details</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    disabled={true}
                                    value={SelectedOrder.deliveryDetails.contact + "\n("
                                        + SelectedOrder.email + ")" }
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Delivery Address</Form.Label>
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
                                <Form.Label>Instructions</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    disabled={true}
                                    value={SelectedOrder.instructions}
                                />
                            </Form.Group>

                        </Col>
                        <Col xs={6} className="order-body-right" >

                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AdminOrder;