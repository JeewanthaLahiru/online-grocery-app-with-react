import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import Add001 from "../../assets/images/ads/ad001.png";
import {Controller, useForm, useFormState} from 'react-hook-form';
import {deliveryTypes, paymentMethod} from "../../types/DeliveryTypes";
import CardImg from "../../assets/images/checkout/credit.webp";
import CashImg from "../../assets/images/checkout/money.webp";
import {EOrderStatus, IOrderGql, IPurchasedItems} from "../../types/Orders";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/reducers";
import {useMutation} from "@apollo/client";
import {CREATE_ORDER_MUTATION} from "../../graphql/mutations/Order";
import {loading_end, loading_start} from "../../store/actions/LoadingActions";

const DeliveryArea:React.FC = () => {

    const [deliveryAddress, setDeliveryAddress] = useState(false);
    const dispatch = useDispatch();

    const [createOrder] = useMutation(CREATE_ORDER_MUTATION);

    const cartItems = useSelector((state:AppState)=> state.cartProduct.cartProducts);
    const purchasedItems:IPurchasedItems[] = [];
    var subTotal = 0;

    cartItems.map((item, index) => {
        subTotal = subTotal + (item.product.price * item.qty);
        purchasedItems.push({
            itemId: String(item.id),
            itemPrice: String(item.product.price),
            itemName: item.product.name,
            itemQty: String(item.qty)
        })
    })

    const {handleSubmit, control, formState: { errors }, reset, setValue, getValues} = useForm<deliveryTypes>();

    const handleOnSubmit = (data:deliveryTypes) => {
        dispatch(loading_start(true));
        if(!deliveryAddress){
            data.deliveryAddress = data.userAddress
        }
        console.log(data);
        const orderDetails: IOrderGql = {
            email: data.email,
            billingDetails: {
                name: data.fullName,
                streetAddress: data.userAddress.address,
                city: data.userAddress.city,
                country: data.userAddress.country,
                postalCode: data.userAddress.postalCode,
                contact: data.userAddress.contactNumber
            },
            shippingDetails: {
                name: data.fullName,
                streetAddress: data.deliveryAddress.address,
                city: data.deliveryAddress.city,
                country: data.deliveryAddress.country,
                postalCode: data.deliveryAddress.postalCode,
                contact: data.deliveryAddress.contactNumber
            },
            paymentMethod: data.paymentMethod,
            instructions: data.deliveryInstructions,
            orderStatus: EOrderStatus.PENDING,
            purchasedItems: purchasedItems,
            subTotal: String(subTotal+100),
            discount: "0"

        }
        createOrder({variables:{
            input: orderDetails
            }}).then(()=> {
                console.log("order created successfully")
                loading_end(false);
            })
            .catch((err)=> {
                console.log("order creation faild: " + err)
                loading_end(false);
            })
        console.log(orderDetails);
    }

    const paymentName = "paymentMethod";
    const paymentOptions = [
        {
            label:"Credit/Debit Card",
            id: paymentMethod.card,
            img : CardImg
        },
        {
            label:"Cash on Delivery",
            id: paymentMethod.cash,
            img: CashImg
        }
    ]

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

    const [paymentRadio, setPaymentRadio] = useState(paymentOptions[0].id);
    const [radio, setRadio] = useState(shippingOptions[0].id);
    const changePaymentRadio = (e:any) => {
        let id = e.target.id.replace(paymentName, "");
        console.log(id);
        setPaymentRadio(id);
        setValue(paymentName, id);
    };
    const changeRadio = (e:any) => {
        let id = e.target.id.replace(name, "");
        console.log(id);
        setRadio(id);
        setValue(name, id);
        if(id === "change"){
         setDeliveryAddress(true);
        }else{
            setDeliveryAddress(false);
        }
    };

    return(
        <React.Fragment>
            <Row className="mx-0 mt-3 delivery-area">
                <Col xs={12} lg={5} className="adver-area p-0 mb-2">
                    <Row className="mx-0 px-0">
                        <Col xs={12} className="mx-0 border-round">
                            <Image src={Add001} />
                        </Col>
                    </Row>

                </Col>
                <Col xs={12} lg={7} className="address-area pr-0 pl-0 pl-lg-4">
                    <Row className="mx-0 py-3 border-round">
                        <Col xs={6} className="text-left">Already have an account?</Col>
                        <Col xs={6}>
                            <Button variant={"success"} size={"sm"} className="px-5" >Sign in</Button>
                        </Col>
                    </Row>
                    <Form onSubmit={handleSubmit(handleOnSubmit)} className="payment-form">
                        <Row className="mx-0 mt-1 pb-4 border-round small-label">
                            <Col xs={12} className="px-0 title-area">
                                <Row className="m-0">
                                    <Col xs={12}>
                                        <h5 className="text-left mt-2">Shipping and Billing Address</h5>
                                    </Col>
                                </Row>
                                <hr className="m-0 p-0" />
                            </Col>
                            <hr/>
                            <Col xs={12} className="mt-2 ">
                                <Form.Label className="text-left m-0">Full name*</Form.Label>
                                <Controller
                                    control={control}
                                    defaultValue={''}
                                    name={"fullName"}
                                    render={({field})=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    rules={{
                                        required: true,
                                    }}
                                />
                                {errors.fullName &&
                                    <span className="text-danger float-left">
                                        * This field is required
                                    </span>
                                }
                            </Col>
                            <Col xs={12} className="mt-2">
                                <Form.Label className="text-left m-0">Address*</Form.Label>
                                <Controller
                                    control={control}
                                    defaultValue={''}
                                    name={'userAddress.address'}
                                    render={({field})=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    rules={{
                                        required: true
                                    }}
                                />
                                {errors.userAddress?.address &&
                                    <span className="text-danger float-left">
                                        * This field is required
                                    </span>
                                }
                            </Col>
                            <Col xs={4} className="mt-2">
                                <Form.Label className="text-left m-0">City/suburb*</Form.Label>
                                <Controller
                                    control={control}
                                    defaultValue={""}
                                    render={({field})=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.city'}
                                    rules={{
                                        required: true
                                    }}
                                />
                                {errors.userAddress?.city &&
                                    <span className="text-danger float-left">
                                        * This field is required
                                    </span>
                                }
                            </Col>
                            <Col xs={4} className="mt-2">
                                <Form.Label className="text-left m-0">Postal code*</Form.Label>
                                <Controller
                                    control={control}
                                    defaultValue={""}
                                    render={({field})=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.postalCode'}
                                    rules={{
                                        required: true
                                    }}
                                />
                                {errors.userAddress?.postalCode &&
                                    <span className="text-danger float-left">
                                        * This field is required
                                    </span>
                                }
                            </Col>
                            <Col xs={4} className="mt-2">
                                <Form.Label className="text-left m-0">Country*</Form.Label>
                                <Controller
                                    control={control}
                                    defaultValue={""}
                                    render={({field})=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.country'}
                                    rules={{
                                        required: true
                                    }}
                                />
                                {errors.userAddress?.country &&
                                    <span className="text-danger float-left">
                                        * This field is required
                                    </span>
                                }
                            </Col>
                            <Col xs={12} className="mt-2">
                                <Form.Label className="text-left m-0">Contact Number*</Form.Label>
                                <Controller
                                    control={control}
                                    defaultValue={""}
                                    render={({field})=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    name={'userAddress.contactNumber'}
                                    rules={{
                                        required: true
                                    }}
                                />
                                {errors.userAddress?.contactNumber &&
                                <span className="text-danger float-left">
                                        * This field is required
                                    </span>
                                }
                            </Col>
                            <Col xs={6} className="mt-2">
                                <Form.Label className="text-left m-0">Email*</Form.Label>
                                <Controller
                                    control={control}
                                    defaultValue={""}
                                    name={'email'}
                                    render={({field})=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    rules={{
                                        required: true
                                    }}
                                />
                                {errors.email &&
                                <span className="text-danger float-left">
                                        * This field is required
                                    </span>
                                }
                            </Col>
                            <Col xs={6} className="mt-2">
                                <Form.Label className="text-left m-0">Retype Email*</Form.Label>
                                <Controller
                                    control={control}
                                    defaultValue={""}
                                    name={'retypeEmail'}
                                    render={({field})=>(
                                        <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                    )}
                                    rules={{
                                        required: true
                                    }}
                                />
                                {errors.retypeEmail &&
                                    <span className="text-danger float-left">
                                        * This field is required
                                    </span>
                                }
                            </Col>
                            <Col xs={12} className="mt-2">
                                <Form.Label className="text-left m-0">Choose your password*</Form.Label>
                                <Controller
                                    control={control}
                                    defaultValue={""}
                                    render={({field})=>(
                                        <Form.Control size={"sm"} className="deliveryInput pr-5" {...field} />
                                    )}
                                    name={'password'}
                                    rules={{
                                        required: true
                                    }}
                                />
                                {errors.password &&
                                <span className="text-danger float-left">
                                        * This field is required
                                    </span>
                                }
                            </Col>
                        </Row>
                        <Form.Label className="text-left mx-0 mt-4">Change Shipping address</Form.Label>
                        <Controller
                            render={()=>(
                                <Row className="mx-0 small-label" >
                                    {shippingOptions.map((opt) => {
                                        return (
                                            <Col xs={12} sm={5}>
                                                <Form.Check
                                                    className="text-left"
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
                        {
                            deliveryAddress &&
                            <Row className="mx-0 px-0 small-label">
                                <Col xs={12} className="mt-2 px-0">
                                    <Form.Label className="text-left m-0">Delivery Address*</Form.Label>
                                    <Controller
                                        control={control}
                                        render={({field})=>(
                                            <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                        )}
                                        name={'deliveryAddress.address'}
                                        defaultValue={""}
                                    />
                                </Col>
                                <Col xs={4} className="mt-2 pl-0">
                                    <Form.Label className="text-left m-0">City/suburb*</Form.Label>
                                    <Controller
                                        control={control}
                                        render={({field})=>(
                                            <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                        )}
                                        name={'deliveryAddress.city'}
                                        defaultValue={""}
                                    />
                                </Col>
                                <Col xs={4} className="mt-2 px-0">
                                    <Form.Label className="text-left m-0">Postal code*</Form.Label>
                                    <Controller
                                        control={control}
                                        render={({field})=>(
                                            <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                        )}
                                        name={'deliveryAddress.postalCode'}
                                        defaultValue={""}
                                    />
                                </Col>
                                <Col xs={4} className="mt-2 pr-0">
                                    <Form.Label className="text-left m-0">Country*</Form.Label>
                                    <Controller
                                        control={control}
                                        render={({field})=>(
                                            <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                        )}
                                        name={'deliveryAddress.country'}
                                        defaultValue={""}
                                    />
                                </Col>
                                <Col xs={12} className="mt-2 px-0">
                                    <Form.Label className="text-left m-0">Contact Number*</Form.Label>
                                    <Controller
                                        control={control}
                                        defaultValue={""}
                                        render={({field})=>(
                                            <Form.Control size={"sm"} className="deliveryInput" {...field} />
                                        )}
                                        name={'deliveryAddress.contactNumber'}
                                    />
                                </Col>
                            </Row>
                        }

                        <Form.Group controlId="exampleForm.ControlTextarea1" className={"instruction mt-4"}>
                            <Form.Label className="text-left m-0">Add delivery instructions (Optional)</Form.Label>
                            <Controller
                                control={control}
                                defaultValue={""}
                                name={'deliveryInstructions'}
                                render={({field})=>(
                                    <Form.Control as="textarea" size={"sm"} rows={3} {...field} />
                                )}
                            />

                        </Form.Group>

                        <Form.Label className="text-left m-0">Payment method</Form.Label>

                        <Controller
                            render={()=>(
                                <Row className="mx-0 payment-method" >
                                    {paymentOptions.map((opt) => {
                                        return (
                                            <Col xs={6} className="mt-3 payment-col">
                                                <Form.Check
                                                    key={paymentName + opt.id}
                                                    checked={paymentRadio === opt.id}
                                                    label={
                                                        <div className={"payment-container pt-3 " + (paymentRadio == opt.id? "checked" : "")}>
                                                            <Image src={opt.img}/>
                                                            <Form.Label className="payment-label mt-2">
                                                                {opt.label}
                                                            </Form.Label>
                                                        </div>
                                                    }
                                                    id={paymentName + opt.id}
                                                    onChange={(e:React.FormEvent<HTMLInputElement>) => {changePaymentRadio(e)}}
                                                />
                                            </Col>

                                        );
                                    })}
                                </Row>
                            )
                            }
                            control={control}
                            name={"paymentMethod"}
                            defaultValue={paymentOptions[0].id}
                        />

                        <Button type={"submit"} variant={"success"} className="mt-4 px-5">Order</Button>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DeliveryArea;