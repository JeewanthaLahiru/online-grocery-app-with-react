import React from "react";
import {Col, Row, Image} from "react-bootstrap";
import CoverIMG from "../../../assets/images/banner_images/banner.jpg";
import ProductTable from "./ProductTable";

const AdminProductArea:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="admin-product-row justify-content-center mx-0 mt-3">
                <Col xs={7} className="admin-product-body">
                    <Row className="mx-0">
                        <Col xs={12} className="header-area">
                            <Image src={CoverIMG} />
                        </Col>
                    </Row>
                    <Row className="mx-0">
                        <ProductTable/>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AdminProductArea;