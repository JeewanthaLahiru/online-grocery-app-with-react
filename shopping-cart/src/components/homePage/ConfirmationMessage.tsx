import React from "react";
import {Button, Col, Row} from "react-bootstrap";

const ConfirmationMessage:React.FC = () => {
    return(
        <Row className="m-0 p-0 confirm-message-area">
            <Col xs={12}>
                <Row className="m-0 p-0 border-success">
                    <Col xs={12} className="bg-success first-row">
                        <h2 >Confirm Delete</h2>
                    </Col>
                    <Col xs={12} className="bg-white py-4 second-row">
                        <span >Are you sure want to delete this product?</span>
                    </Col>
                    <Col xs={12} className="pb-3 third-row">
                        <hr/>
                        <Button className="float-right" variant="outline-danger" >Cancel</Button>
                        <Button className="float-right mx-1" variant="danger">Confirm </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ConfirmationMessage;