import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import {registerTypes} from "../../../types/RegisterTypes";

const Register:React.FC = () => {
    const [checkBox, setCheckbox] = useState(false);

    const onCheckBoxClick = () => {
        setCheckbox(!checkBox);
    }

    const {handleSubmit, control, errors, reset, setValue} = useForm<registerTypes>();

    return(
        <React.Fragment>
            <Row className="mx-0 justify-content-center register-form-root">
                <Col lg={6} className="register-form my-4" >
                    <Row className="mx-0 align-items-center " >
                        <Col xs={4}>
                            <hr/>
                        </Col>
                        <Col xs={4}>
                            <h1>Register</h1>
                        </Col>
                        <Col xs={4}>
                            <hr/>
                        </Col>
                    </Row>
                    <Form>
                        <Row className="mx-0" >
                            <Col xs={6}>
                                <Controller
                                    control={control}
                                    name={"first-name"}
                                    as={<Form.Control placeholder={"First Name"} className='registerInput'/>}
                                    defaultValue={''}
                                    rules={{
                                        required: true
                                    }}
                                />
                            </Col>
                            <Col xs={6}>
                                <Controller
                                    control={control}
                                    name={"last-name"}
                                    as={<Form.Control placeholder={"Last Name"} className="registerInput"/>}
                                    defaultValue={''}
                                    rules={{
                                        required : true
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className={"mx-0"} >
                            <Col xs={12}>
                                <Controller
                                    control={control}
                                    name={"email"}
                                    as={<Form.Control placeholder={"Email"} className="registerInput" />}
                                    defaultValue={""}
                                    rules={{
                                        required: true
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className={"mx-0"} >
                            <Col xs={12}>
                                <Controller
                                    control={control}
                                    name={"password"}
                                    as={<Form.Control placeholder={"Password"} className="registerInput" />}
                                    defaultValue={""}
                                    rules={{
                                        required: true
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className={"mx-0"} >
                            <Col xs={12}>
                                <Controller
                                    control={control}
                                    name={"confirmPassword"}
                                    as={<Form.Control placeholder={"Confirm password"} className="registerInput" />}
                                    defaultValue={""}
                                    rules={{
                                        required: true
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className={"mx-0"}>
                            <Col xs={12}>
                                <Form.Check
                                    type="checkbox"
                                    label="I accept Terms of Use and Privacy Policy"
                                    onChange={onCheckBoxClick}
                                />
                            </Col>
                        </Row>
                        <Row className="mx-0" >
                            <Col xs={12}>
                                <Button variant="success" disabled={!checkBox}>
                                    Register
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Register;