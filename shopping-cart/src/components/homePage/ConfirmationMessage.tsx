import React from "react";
import {Button, Col, Row} from "react-bootstrap";

const ConfirmationMessage:React.FC = () => {
    return(
        <Row className="m-0 p-0">
            <Col xs={12}>
                <Row className="m-0 p-0 border-success">
                    <Col xs={12} className="bg-success">
                        <h2 >Confirm Delete</h2>
                    </Col>
                    <Col xs={12} className="bg-white py-4">
                        <span >Are you sure want to delete this product?</span>
                    </Col>
                    <Col xs={12} className="p-0 ">
                        <hr className="bg-success py-0 px-0 mx-0 mb-1" />
                        <Button className="float-right" variant="light" >Cancel</Button>
                        <Button className="float-right mx-1" variant="warning">Confirm </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ConfirmationMessage;