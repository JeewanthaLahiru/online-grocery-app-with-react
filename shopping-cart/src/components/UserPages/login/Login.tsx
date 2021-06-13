import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import CartImg from "../../../assets/images/login/cart.png";
import { Controller, useForm } from 'react-hook-form';

const Login:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="mx-0 my-4 justify-content-center">
                <Col xs={8} className="login-page" >
                    <Row className="mx-0 align-items-center" >
                        <Col xs={6}>
                            <Image src={CartImg}/>
                        </Col>
                        <Col xs={6}>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Login;