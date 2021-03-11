import React from "react";
import {Col, Row} from "react-bootstrap";
import CategoryItem from "./CategoryItem";
import AllCat from "../../../assets/images/product_category/allcategories.jpg";

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
                    <Col xs={2}>
                        <CategoryItem image={AllCat} name={"All"}/>
                    </Col>
                    <Col xs={2}>
                        <CategoryItem image={AllCat} name={"All"}/>
                    </Col>
                    <Col xs={2}>
                        <CategoryItem image={AllCat} name={"All"}/>
                    </Col>
                    <Col xs={2}>
                        <CategoryItem image={AllCat} name={"All"}/>
                    </Col>
                    <Col xs={2}>
                        <CategoryItem image={AllCat} name={"All"}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ProductListArea;