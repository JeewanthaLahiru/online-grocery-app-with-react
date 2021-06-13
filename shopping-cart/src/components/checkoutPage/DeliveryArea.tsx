import React from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import Add001 from "../../assets/images/ads/ad001.png";

const DeliveryArea:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="mx-0 mt-3 delivery-area">
                <Col xs={5} className="adver-area">
                    <Image src={Add001} />
                </Col>
                <Col xs={7} className="address-area">
                    <Row className="mx-0 p-3 border-round">
                        <Col xs={6}>Already have an account?</Col>
                        <Col xs={6}>
                            <Button variant={"success"} size={"sm"} className="px-5" >Sign in</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DeliveryArea;