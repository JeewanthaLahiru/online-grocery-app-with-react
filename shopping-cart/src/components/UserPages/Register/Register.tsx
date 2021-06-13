import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";

const Register:React.FC = () => {
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
                            <Col xs={12}>

                            </Col>
                            <Col xs={12}></Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Register;