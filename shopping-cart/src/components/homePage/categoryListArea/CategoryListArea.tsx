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
            <Col className="m-0 px-5">
                <Row className=" closing-label" >
                    <Col className="closing-label-inside" >
                        <p>*Products listed here are demo purpose
                        only. They are not available for sale.</p>
                        <i className="feather icon-x" ></i>
                    </Col>
                </Row>
                <Row className="m-0 p-0">
                    <Col xs={12} className="m-0 p-0">
                        <h2 className="my-3 text-success text-center p-0">Demo Products</h2>
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