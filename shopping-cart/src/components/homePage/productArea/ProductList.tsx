import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import Product from "./Product";
import {products} from "../../../repository/Products";
import {IProduct} from "../../../types/Products";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../store/reducers";
import {useMutation, useQuery} from "@apollo/client";
import {GET_PRODUCTS} from "../../../graphql/queries/Product";
import {loading_end, loading_start} from "../../../store/actions/LoadingActions";

const ProductList:React.FC = () => {

    const currentCategory = useSelector((state:AppState) => state.category.category);
    const dispatch = useDispatch();
    const {loading, data, error, refetch} = useQuery(GET_PRODUCTS);
    const productsFromServer:any = [];
    if (loading) return <React.Fragment>'Loading...'</React.Fragment>;
    if (error) return <React.Fragment>`Error! ${error.message}`</React.Fragment>;
    //dispatch(loading_end(false));
    data.getproducts.map((product:any)=>{
        productsFromServer.push(product);
    })
    console.log(productsFromServer);


    const renderCategoryNew = ( category :string) => {
        return(
            productsFromServer.map((product:IProduct, index:number)=>{
                if(category === product.category){
                    return(
                        <Product product={product} index={index} />
                    )
                }
            })
        )
    }
    const renderProducts = () => {
        return(
            <React.Fragment>
                {(currentCategory==="All" || currentCategory === "Grocery") &&
                    <React.Fragment>
                        <Col xs={12}>
                            <h2 className="text-left" >Grocery</h2>
                        </Col>
                        {renderCategoryNew("Grocery")}
                    </React.Fragment>
                }
                {(currentCategory==="All" || currentCategory ==="Pharmacy") &&
                <React.Fragment>
                    <Col xs={12}>
                        <h2 className="text-left" >Pharmacy</h2>
                    </Col>
                    {renderCategoryNew("Pharmacy")}
                </React.Fragment>
                }
                {(currentCategory==="All" || currentCategory ==="Food") &&
                <React.Fragment>
                    <Col xs={12}>
                        <h2 className="text-left" >Food</h2>
                    </Col>
                    {renderCategoryNew("Food")}
                </React.Fragment>
                }
                {(currentCategory==="All" || currentCategory ==="Electronic") &&
                <React.Fragment>
                    <Col xs={12}>
                        <h2 className="text-left" >Electronic</h2>
                    </Col>
                    {renderCategoryNew("Electronic")}
                </React.Fragment>
                }
            </React.Fragment>
        )
    }


    return(
        <Row className="product-list p-4"   id={"product-list"} >
            {/*{renderCategory()}*/}
            {renderProducts()}
        </Row>
    )
}

export default ProductList;