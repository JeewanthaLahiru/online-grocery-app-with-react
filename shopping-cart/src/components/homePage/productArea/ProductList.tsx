import React from "react";
import {Col, Row} from "react-bootstrap";
import Product from "./Product";
import {products} from "../../../repository/Products";
import {IProduct} from "../../../types/Products";

const ProductList:React.FC = () => {

    const renderAllProducts = (category:string) => {
        return(
            products.map((product:IProduct, index:number)=>{
                if(product.category === category){
                    return(
                        <Product product={product} index={index} />
                    )
                }
            })
        )
    }
    const renderGroceryList = () => {
        return(
            <React.Fragment>
                <Row>
                    <Col className="mt-4 ml-3">
                        <h5>Grocery</h5>
                    </Col>
                </Row>
                <Row className="m-0 p-0" >
                    {renderAllProducts('Grocery')}
                </Row>
            </React.Fragment>
        )
    }
    const renderPharmacyList = () => {
        return(
            <React.Fragment>
                <Row>
                    <Col className="mt-4 ml-3">
                        <h5>Pharmacy</h5>
                    </Col>
                </Row>
                <Row className="m-0 p-0" >
                    {renderAllProducts('Pharmacy')}
                </Row>
            </React.Fragment>
        )
    }
    const renderFoodList = () => {
        return(
            <React.Fragment>
                <Row>
                    <Col className="mt-4 ml-3">
                        <h5>Food</h5>
                    </Col>
                </Row>
                <Row className="m-0 p-0" >
                    {renderAllProducts('Food')}
                </Row>
            </React.Fragment>
        )
    }
    const renderElectronicList = () => {
        return(
            <React.Fragment>
                <Row>
                    <Col className="mt-4 ml-3">
                        <h5>Electronic</h5>
                    </Col>
                </Row>
                <Row className="m-0 p-0" >
                    {renderAllProducts('Electronic')}
                </Row>
            </React.Fragment>
        )
    }
    const renderAllCategory = () => {
        return(
            <React.Fragment>
                <Row className="product-list mb-5">
                    {renderGroceryList()}
                </Row>
                <Row className="product-list mb-5">
                    {renderPharmacyList()}
                </Row>
                <Row className="product-list mb-5">
                    {renderFoodList()}
                </Row>
                <Row className="product-list mb-5">
                    {renderElectronicList()}
                </Row>
            </React.Fragment>
        );
    }



    return(
        <Row className="product-list p-4" >
            {renderAllProducts("Grocery")}
        </Row>
    )
}

export default ProductList;