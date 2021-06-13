import React from 'react';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import CartImg from "../../../assets/images/login/cart.png";
import { Controller, useForm } from 'react-hook-form';
import {loginType} from "../../../types/RegisterTypes";
import {Link} from 'react-router-dom';

const Login:React.FC = () => {


    const onSubmit = () => {
        console.log("hello world");
    }

    const {handleSubmit, control, errors, reset, setValue} = useForm<loginType>();

    return(
        <React.Fragment>
            <Row className="mx-0 my-4 justify-content-center">
                <Col xl={8} md={11} sm={12} className="login-page" >
                    <Row className="mx-0 login-row" >
                        <Col xs={12} sm={12} md={6}  className="mt-5 image-col">
                            <Image src={CartImg}/>
                        </Col>
                        <Col xs={12} sm={12} md={6}  className="mt-5 imput-col">
                            <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
                                <Row className="mx-0">
                                    <Col xs={12}>
                                        <h1 className="text-left" >Login</h1>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col xs={12}>
                                        <Form.Label className="text-left" >Email</Form.Label>
                                        <Controller
                                            control={control}
                                            name={"email"}
                                            as={<Form.Control className="loginInput" />}
                                            rules={{
                                                required : true
                                            }}
                                        />
                                        {errors.email && <span className="text-danger" >*This field is required</span>}
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col xs={12}>
                                        <Form.Label className="text-left" >Password</Form.Label>
                                        <Controller
                                            control={control}
                                            name={"password"}
                                            as={<Form.Control type={"password"} className="loginInput" />}
                                            rules={{
                                                required : true
                                            }}
                                        />
                                        {errors.password && <span className="text-danger" >*This field is required</span>}
                                    </Col>
                                </Row>
                                <Row className="mt-4 mx-0">
                                    <Col xs={12}>
                                        <Controller
                                            control={control}
                                            name={"staySign"}
                                            as={<Form.Check
                                                type={"checkbox"}
                                                label={"Stay signed in?"}
                                                className="text-left" />}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mx-0 mt-3" >
                                    <Col xs={12}>
                                        <Button variant={"success"} className="px-5" type={"submit"} >Login</Button>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row className="mx-0" >
                                    <Col xs={12}>
                                        Don't have an account?
                                        <Link to={"/register"}> Sign up</Link>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Login;