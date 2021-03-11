import React from "react";
import {Col, Row} from "react-bootstrap";

const ProductListArea:React.FC = () => {
    return(
        <Row className="mx-0 px-lg-5">
            <Col className="m-0 p-0">
                <Row>
                    <Col xs="12">
                        <h2 className="text-success text-center">Demo Products</h2>
                    </Col>
                </Row>
                <Row className="px-lg-5">
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ProductListArea;