import React, {ChangeEvent, useState} from "react";
import {Col, Row, Image, Button, Form} from "react-bootstrap";
import CoverIMG from "../../../assets/images/banner_images/banner.jpg";
import ProductTable from "./ProductTable";

const AdminProductArea:React.FC = () => {

    const [adminCategory, setAdminCategory] = useState("All");
    const handleOnCategoryChange = (event:any) => {
        setAdminCategory(event.target.value);
        console.log(event.target.value);
    }

    return(
        <React.Fragment>
            <Row className="admin-product-row justify-content-center mx-0 mt-3">
                <Col xs={12} md={10} xl={7} className="admin-product-body">
                    <Row className="mx-0">
                        <Col xs={12} className="header-area">
                            <Image src={CoverIMG} />
                        </Col>
                    </Row>
                    <Row className="mx-0 mt-2">
                        <Col lg={3} xs={3}>
                            <h3 className="text-left">Products</h3>
                        </Col>
                        <Col lg={{span:2, offset:5}}
                             xs={{span:3, offset:2}}
                             className="align-items-end">
                            <Form.Control
                                required
                                name={"category"}
                                as="select"
                                size={"sm"}
                                value={adminCategory}
                                onChange={(event:ChangeEvent<HTMLInputElement>) => handleOnCategoryChange(event)}
                            >
                                <option key={"1"} value={"All"}>All</option>
                                <option key={"2"} value={"Grocery"} >Grocery</option>
                                <option key={"3"} value={"Pharmacy"}>Pharmacy</option>
                                <option key={"4"} value={"Food"} >Food</option>
                                <option key={"5"} value={"Electronic"} >Electronic</option>
                            </Form.Control>
                        </Col>
                        <Col lg={2} xs={4}>
                            <Button variant="outline-success" size={"sm"}>
                                + Add Product
                            </Button>
                        </Col>
                    </Row>
                    <Row className="mx-0">
                        <Col xs={12}>
                            <Row className="mx-0 mb-5 admin-product-table-row">
                                <ProductTable category={adminCategory} />
                            </Row>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AdminProductArea;