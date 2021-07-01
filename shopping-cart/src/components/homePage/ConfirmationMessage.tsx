import React from "react";
import {Button, Col, Row} from "react-bootstrap";

const ConfirmationMessage:React.FC = () => {
    return(
        <Row className="m-0 p-0">
            <Col xs={12}>
                <Row className="m-0 p-0">
                    <Col xs={12} className="bg-success">
                        hello world
                    </Col>
                    <Col xs={12} className="bg-white">
                        Confirm?
                    </Col>
                    <Col xs={12}>
                        <Button className="float-right" variant="light" >Cancel</Button>
                        <Button className="float-right mx-1" variant="warning">Confirm </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ConfirmationMessage;