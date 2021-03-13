import React from 'react';
import {Container} from "react-bootstrap";
import HeaderArea from "./components/homePage/headerArea/HeaderArea";
import BannerArea from "./components/homePage/bannerArea/BannerArea";
import SearchArea from "./components/homePage/searchArea/SearchArea";
import CategoryListArea from "./components/homePage/categoryListArea/CategoryListArea";
import ProductList from "./components/homePage/productArea/ProductList";

const ClientApp:React.FC = () => {
    return(
        <Container fluid={true} className="m-0 p-0" >
            <HeaderArea/>
            <BannerArea/>
            <SearchArea/>
            <CategoryListArea/>
            <ProductList/>
        </Container>
    )
}

export default ClientApp;