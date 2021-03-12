import React from "react";
import {Col, Row} from "react-bootstrap";
import CategoryItem from "./CategoryItem";
import AllCat from "../../../assets/images/product_category/allcategories.jpg";
import Grocery from "../../../assets/images/product_category/grocery.png";
import Pharmacy from "../../../assets/images/product_category/health.png";
import Food from "../../../assets/images/product_category/food.png";
import Electro from "../../../assets/images/product_category/electro.png";

const ProductListArea:React.FC = () => {
    return(
        <Row className="mx-0 px-lg-5 category-list-area">
            <Col className="m-0 p-0">
                <Row>
                    <Col xs="12">
                        <h2 className="my-3 text-success text-center">Demo Products</h2>
                    </Col>
                </Row>
                <Row className="justify-content-around product-list-area">
                    <Col xs={2}>
                        <CategoryItem image={AllCat} name={"All"}/>
                    </Col>
                    <Col xs={2}>
                        <CategoryItem image={Grocery} name={"Grocery"}/>
                    </Col>
                    <Col xs={2}>
                        <CategoryItem image={Pharmacy} name={"Pharmacy"}/>
                    </Col>
                    <Col xs={2}>
                        <CategoryItem image={Food} name={"Food"}/>
                    </Col>
                    <Col xs={2}>
                        <CategoryItem image={Electro} name={"Electronic"}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ProductListArea;