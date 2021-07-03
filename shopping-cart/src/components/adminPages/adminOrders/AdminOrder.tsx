import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {Button, Col, Row, Form} from "react-bootstrap";
import OrderProductItem from "./OrderProductItem";
import {useQuery} from "@apollo/client";
import {GET_ONE_ORDER} from "../../../graphql/queries/Order";
import {useDispatch} from "react-redux";
import {loading_start} from "../../../store/actions/LoadingActions";

interface ParamTypes{
    orderid:string
}

const AdminOrder:React.FC = () => {
    const dispatch = useDispatch();
    const {orderid} = useParams<ParamTypes>();
    const history = useHistory();
    const {loading, data, refetch, error} = useQuery(GET_ONE_ORDER, {
        variables: {
            input: {
                id: orderid
            }
        }
    });
    if(loading){
        dispatch(loading_start(true));
    }else{
        dispatch(loading_start(false));
    }

    const showOrders = () => {
        console.log("you clicked accept");
    }

    const handleOnBackToOrders = () => {
        history.push("/admin/orders");
    }

    return(
        <React.Fragment>
            <Row className="mx-0 order-view justify-content-center">
                <Col xs={12} md={10} xl={8}>
                    <Row className="mx-0 back-row my-3">
                        <Col xs={12}>
                            <h1 className="text-left" onClick={handleOnBackToOrders}>
                                <i className="feather icon-chevron-left" />
                                &nbsp;&nbsp;Back to orders
                            </h1>
                        </Col>
                    </Row>
                    <Row className="mx-0 title-row">
                        <Col xs={12} md={5}>
                            <h5 className="text-left" >Order { data ? data.getOneOrder.id : ""}</h5>
                            <h6 className="text-left" >Order created at 6/1/2021, 6:42:24</h6>
                        </Col>
                        <Col xs={12} md={7}>
                            <Button
                                onClick={showOrders}
                                variant={"outline-success"}
                                className="float-md-right mr-3 mr-md-0 float-left px-5"
                            >
                                Accept
                            </Button>
                            <Button
                                variant={"outline-danger"}
                                className="mr-3 float-md-right float-left px-5"
                            >
                                Reject
                            </Button>
                        </Col>
                    </Row>
                    <Row className="order-body mx-0 my-5">
                        <Col xs={12} lg={6} className="order-body-left">
                            <Form.Group >
                                <Form.Label className="float-left">Customer</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    value={data? data.getOneOrder.shippingDetails.name : ""}
                                    disabled={true}
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className="float-left" >Contact Details</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    disabled={true}
                                    value={data? (data.getOneOrder.shippingDetails.contact + "\n("
                                        + data.getOneOrder.email + ")" ): ""}
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className="float-left" >Delivery Address</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    disabled={true}
                                    value={ data? ( data.getOneOrder.shippingDetails.streetAddress + "\n"
                                        + data.getOneOrder.shippingDetails.city + "\n"
                                        + data.getOneOrder.shippingDetails.country + "\n"
                                        + data.getOneOrder.shippingDetails.postalCode) : ""
                                    }
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className="float-left">Instructions</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    disabled={true}
                                    value={data? data.getOneOrder.instructions: ""}
                                />
                            </Form.Group>

                        </Col>
                        <Col xs={12} lg={6} className="order-body-right" >
                            <Row className="mx-0 mt-4 p-0">
                                <Col xs={12} className="order-products m-0 p-0">
                                    <Row className="mx-0">

                                        {
                                            data? (data.getOneOrder.purchasedItems.map((orderItem:any, index: number)=>{
                                                return <OrderProductItem product={orderItem} key={index}/>
                                            })) : ""
                                        }
                                    </Row>
                                </Col>
                                <Col xs={12} className="order-price mx-0 mt-3 p-0">
                                    <table>
                                        <tr>
                                            <td className="text-left">Payment Status</td>
                                            <td className="text-right text-success">{/*{SelectedOrder.orderStatus}*/}</td>
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
                                            <td className="text-right">Rs.{data? data.getOneOrder.subTotal : ""}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left">Total</td>
                                            <td className="text-right" >
                                                Rs.{ data? (data.getOneOrder.subTotal -100) : "" }
                                            </td>
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