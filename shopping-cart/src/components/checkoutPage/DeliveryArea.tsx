import React, {useState} from 'react';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import Add001 from "../../assets/images/ads/ad001.png";
import {Controller, useForm, useFormState} from 'react-hook-form';
import {deliveryTypes} from "../../types/DeliveryTypes";

const DeliveryArea:React.FC = () => {

    const {handleSubmit, control, formState: { errors }, reset, setValue} = useForm<deliveryTypes>();

    const handleOnSubmit = (data:deliveryTypes) => {
        console.log(data);
    }

    const name="shippingOption"
    const shippingOptions = [
        {
            label: "Same as user address",
            id: "same"
        },
        {
            label: "Change shipping address",
            id: "change"
        }
        ];
    const [radio, setRadio] = useState(shippingOptions[0].id);
    const changeRadio = (e:any) => {
        let id = e.target.id.replace(name, "");
        console.log(id);
        setRadio(id);
        setValue(name, id);
    };

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
                    <Form onSubmit={handleSubmit(handleOnSubmit)}>
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
                                    defaultValue={''}
                                    name={"fullName"}
                                    render={({field})=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
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
                        <Form.Label className="text-left m-0">Change Shipping address</Form.Label>
                        <Controller
                            render={()=>(
                                <Row className="mx-0" >
                                    {shippingOptions.map((opt) => {
                                        return (
                                            <Col xs={5}>
                                                <Form.Check
                                                    key={name + opt.id}
                                                    checked={radio === opt.id}
                                                    label={opt.label}
                                                    id={name + opt.id}
                                                    onChange={(e:React.FormEvent<HTMLInputElement>) => {changeRadio(e)}}
                                                />
                                            </Col>

                                        );
                                    })}
                                </Row>
                            )
                            }
                            control={control}
                            name={name}
                            defaultValue={shippingOptions[0].id}
                        />
                        <Row className="mx-0 px-0">
                            <Col xs={12} className="mt-2 px-0">
                                <Form.Label className="text-left m-0">Billing Address*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.address'}
                                />
                            </Col>
                            <Col xs={4} className="mt-2 pl-0">
                                <Form.Label className="text-left m-0">City/suburb*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.city'}
                                />
                            </Col>
                            <Col xs={4} className="mt-2 px-0">
                                <Form.Label className="text-left m-0">Postal code*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.postalCode'}
                                />
                            </Col>
                            <Col xs={4} className="mt-2 pr-0">
                                <Form.Label className="text-left m-0">Country*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.country'}
                                />
                            </Col>
                            <Col xs={12} className="mt-2 px-0">
                                <Form.Label className="text-left m-0">Contact Number*</Form.Label>
                                <Controller
                                    control={control}
                                    render={(field)=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.address'}
                                />
                            </Col>
                        </Row>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-left m-0">Add delivery instructions (Optional)</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>


                        <Form.Label className="text-left m-0">Payment method</Form.Label>

                        <Button type={"submit"}>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DeliveryArea;