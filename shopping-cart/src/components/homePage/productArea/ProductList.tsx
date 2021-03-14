import React from "react";
import {Col, Row} from "react-bootstrap";
import Product from "./Product";
import {products} from "../../../repository/Products";
import {IProduct} from "../../../types/Products";
import {useSelector} from "react-redux";
import {AppState} from "../../../store/reducers";

const ProductList:React.FC = () => {

    const currentCategory = useSelector((state:AppState) => state.category.category)

    const renderCategoryList = (category:string) =>{
        return(
            // eslint-disable-next-line
            products.map((product:IProduct, index:number) => {
                if(product.category === category){
                    return(
                        <Col key={index}  xs={12} sm={6} md={4} lg={3} className="m-0 px-3 py-2">
                            <Product index={index} product={product} />
                        </Col>
                    )
                }
            })
        )
    }

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
                        <h5 className="text-left">Foods</h5>
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

    const renderCategory = () => {
        switch (currentCategory){
            case 'Grocery':
                return renderGroceryList();
            case 'Pharmacy':
                return renderPharmacyList();
            case 'Food':
                return renderFoodList();
            case 'Electronic':
                return renderElectronicList();
            case '':
                return renderAllCategory();
            default:
                return renderAllCategory();
        }
    }



    return(
        <Row className="product-list p-4" >
            {renderCategory()}
        </Row>
    )
}

export default ProductList;