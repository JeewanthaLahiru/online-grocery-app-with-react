import React from "react";
import {Col, Row} from "react-bootstrap";

const AddProduct:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="mx-0 justify-content-center add-product">
                <Col xs={12} md={10} xl={8}>
                    <Row className="mx-0 mx-0">
                        <Col xs={12}>
                            <h6 className="text-left" >
                                <i className="feather icon-chevron-left"/>
                                back to products
                            </h6>
                            <h3 className="text-left" >
                                Add new Product
                            </h3>
                        </Col>
                    </Row>
                    <Row className="mx-0">
                        <Col xs={6}>

                        </Col>
                        <Col xs={6}>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AddProduct;