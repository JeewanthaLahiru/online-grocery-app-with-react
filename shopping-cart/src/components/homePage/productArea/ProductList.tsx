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
            <Col xs={12} className="m-0 p-0">
                <Row xs={12}>
                    <Col className="mt-4 ml-3">
                        <h5 className="text-left">Grocery</h5>
                    </Col>
                </Row>
                <Row className="m-0 p-0" >
                    {renderAllProducts('Grocery')}
                </Row>
            </Col>
        )
    }
    const renderPharmacyList = () => {
        return(
            <Col xs={12} className="m-0 p-0">
                <Row>
                    <Col className="mt-4 ml-3">
                        <h5 className="text-left">Pharmacy</h5>
                    </Col>
                </Row>
                <Row className="m-0 p-0" >
                    {renderAllProducts('Pharmacy')}
                </Row>
            </Col>
        )
    }
    const renderFoodList = () => {
        return(
            <Col xs={12} className="m-0 p-0">
                <Row>
                    <Col className="mt-4 ml-3">
                        <h5 className="text-left">Food</h5>
                    </Col>
                </Row>
                <Row className="m-0 p-0" >
                    {renderAllProducts('Food')}
                </Row>
            </Col>
        )
    }
    const renderElectronicList = () => {
        return(
            <Col xs={12} className="m-0 p-0">
                <Row>
                    <Col xs={12} className="mt-4 ml-3">
                        <h5 className="text-left">Electronic</h5>
                    </Col>
                </Row>
                <Row className="m-0 p-0" >
                    {renderAllProducts('Electronic')}
                </Row>
            </Col>
        )
    }
    const renderAllCategory = () => {
        return(
            <Col xs={12} className="m-0 p-0">
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
            </Col>
        );
    }



    return(
        <Row className="product-list p-4" >
            {renderAllCategory()}
        </Row>
    )
}

export default ProductList;