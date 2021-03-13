import React from "react";
import {Col, Row} from "react-bootstrap";
import Product from "./Product";

const ProductList:React.FC = () => {
    return(
        <Row className="product-list p-4" >
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>

        </Row>
    )
}

export default ProductList;