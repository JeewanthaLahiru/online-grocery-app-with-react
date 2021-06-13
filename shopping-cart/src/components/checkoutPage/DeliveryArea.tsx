import React from 'react';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import Add001 from "../../assets/images/ads/ad001.png";
import {Controller, useForm, useFormState} from 'react-hook-form';
import {deliveryTypes} from "../../types/DeliveryTypes";

const DeliveryArea:React.FC = () => {

    const {handleSubmit, control, formState: { errors }, reset, setValue} = useForm<deliveryTypes>();

    return(
        <React.Fragment>
            <Row className="mx-0 mt-3 delivery-area">
                <Col xs={5} className="adver-area p-0">
                    <Row className="mx-0 px-0">
                        <Col xs={12} className="mx-0 border-round">
                            <Image src={Add001} />
                        </Col>
                    </Row>

                </Col>
                <Col xs={7} className="address-area ">
                    <Row className="mx-0 py-3 border-round">
                        <Col xs={6}>Already have an account?</Col>
                        <Col xs={6}>
                            <Button variant={"success"} size={"sm"} className="px-5" >Sign in</Button>
                        </Col>
                    </Row>
                    <Form>
                        <Row className="mx-0 mt-1 py-2 border-round">
                            <Col xs={12}>
                                <Row className="m-0">
                                    <Col xs={12}>
                                        <h5>Shipping and Billing Address</h5>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} className="mt-2">
                                <Form.Label className="text-left m-0">Full name*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'fullName'}
                                />
                            </Col>
                            <Col xs={12} className="mt-2">
                                <Form.Label className="text-left m-0">Billing Address*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.address'}
                                />
                            </Col>
                            <Col xs={4} className="mt-2">
                                <Form.Label className="text-left m-0">City/suburb*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.city'}
                                />
                            </Col>
                            <Col xs={4} className="mt-2">
                                <Form.Label className="text-left m-0">Postal code*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.postalCode'}
                                />
                            </Col>
                            <Col xs={4} className="mt-2">
                                <Form.Label className="text-left m-0">Country*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.country'}
                                />
                            </Col>
                            <Col xs={12} className="mt-2">
                                <Form.Label className="text-left m-0">Contact Number*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.address'}
                                />
                            </Col>
                            <Col xs={6} className="mt-2">
                                <Form.Label className="text-left m-0">Email*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'email'}
                                />
                            </Col>
                            <Col xs={6} className="mt-2">
                                <Form.Label className="text-left m-0">Retype Email*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'retypeEmail'}
                                />
                            </Col>
                            <Col xs={12} className="mt-2">
                                <Form.Label className="text-left m-0">Choose your password*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput pr-5" {...field} />
                                    )}
                                    name={'password'}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DeliveryArea;