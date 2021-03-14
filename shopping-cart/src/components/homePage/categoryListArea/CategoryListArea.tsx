import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import CategoryItem from "./CategoryItem";
import AllCat from "../../../assets/images/product_category/allcategories.jpg";
import Grocery from "../../../assets/images/product_category/grocery.png";
import Pharmacy from "../../../assets/images/product_category/health.png";
import Food from "../../../assets/images/product_category/food.png";
import Electro from "../../../assets/images/product_category/electro.png";

const ProductListArea:React.FC = () => {

    const [isLabelVisible, setIsLabelVisible] = useState(true);

    const closeLabel = () => {
        setIsLabelVisible(false);
    }

    return(
        <Row className="mx-0 mb-4 px-lg-5 category-list-area">
            <Col className="m-0 px-lg-5">
                { isLabelVisible && <Row className=" closing-label my-2" >
                    <Col className="closing-label-inside" >
                        <Row>
                            <Col xs={10}><p>*Products listed here are demo purpose
                                only. They are not available for sale.</p></Col>
                            <Col xs={2}><i className="feather icon-x" onClick={()=> closeLabel()} ></i></Col>
                        </Row>
                    </Col>
                </Row>}
                <Row className="m-0 p-0">
                    <Col xs={12} className="m-0 p-0">
                        <h2 className="my-3 text-success text-center p-0">Demo Products</h2>
                    </Col>
                </Row>
                <Row className="justify-content-between product-list-area">
                    <CategoryItem image={AllCat} name={"All"}/>
                    <CategoryItem image={Grocery} name={"Grocery"}/>
                    <CategoryItem image={Pharmacy} name={"Pharmacy"}/>
                    <CategoryItem image={Food} name={"Food"}/>
                    <CategoryItem image={Electro} name={"Electronic"}/>
                </Row>
            </Col>
        </Row>
    )
}

export default ProductListArea;