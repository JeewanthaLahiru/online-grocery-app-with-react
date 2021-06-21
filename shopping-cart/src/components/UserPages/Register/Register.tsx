import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import {registerTypes} from "../../../types/RegisterTypes";

const Register:React.FC = () => {
    const [checkBox, setCheckbox] = useState(false);

    const onCheckBoxClick = () => {
        setCheckbox(!checkBox);
    }
    const handleOnSubmit = () => {
        console.log('hello');
    }

    const {handleSubmit, control, formState: { errors }, reset, setValue} = useForm<registerTypes>();

    return(
        <React.Fragment>
            <Row className="mx-0 justify-content-center register-form-root">
                <Col lg={5} md={6} className="shadow register-form my-4" >
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
                    <Form onSubmit={handleSubmit(handleOnSubmit)} >
                        <Row className="mx-0" >
                            <Col xs={6}>
                                <Controller
                                    control={control}
                                    name={"firstName"}
                                    render={({field})=>(
                                        <Form.Control placeholder={"First Name"} className='registerInput'/>
                                    )}
                                    defaultValue={''}
                                    rules={{
                                        required: true
                                    }}
                                />
                                {errors.firstName && <span className="text-danger">* This field is required</span>}
                            </Col>
                            <Col xs={6}>
                                <Controller
                                    control={control}
                                    name={"lastName"}
                                    render={()=>(<Form.Control placeholder={"Last Name"} className="registerInput"/>)}
                                    defaultValue={''}
                                    rules={{
                                        required : true
                                    }}
                                />
                                {errors.lastName && <span className="text-danger">* This field is required</span>}
                            </Col>
                        </Row>
                        <Row className={"mx-0"} >
                            <Col xs={12}>
                                <Controller
                                    control={control}
                                    name={"email"}
                                    render={()=>(<Form.Control placeholder={"Email"} className="registerInput" />)}
                                    defaultValue={""}
                                    rules={{
                                        required: true
                                    }}
                                />
                            </Col>
                            {errors.email && <span className="text-danger ml-4">* This field is required</span>}
                        </Row>
                        <Row className={"mx-0"} >
                            <Col xs={12}>
                                <Controller
                                    control={control}
                                    name={"password"}
                                    render={()=>(<Form.Control placeholder={"Password"} className="registerInput" />)}
                                    defaultValue={""}
                                    rules={{
                                        required: true
                                    }}
                                />
                            </Col>
                            {errors.password && <span className="text-danger ml-4">* This field is required</span>}
                        </Row>
                        <Row className={"mx-0"} >
                            <Col xs={12}>
                                <Controller
                                    control={control}
                                    name={"confirmPassword"}
                                    render={()=>(<Form.Control placeholder={"Confirm password"} className="registerInput" />)}
                                    defaultValue={""}
                                    rules={{
                                        required: true
                                    }}
                                />
                            </Col>
                            {errors.confirmPassword && <span className="text-danger ml-4">* This field is required</span>}
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
                                <Button variant="success" disabled={!checkBox} type={"submit"}>
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