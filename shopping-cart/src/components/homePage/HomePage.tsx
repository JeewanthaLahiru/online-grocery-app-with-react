import React from 'react';
import BannerArea from "./bannerArea/BannerArea";
import SearchArea from "./searchArea/SearchArea";
import CategoryListArea from "./categoryListArea/CategoryListArea";
import ProductListArea from "./productArea/ProductList";
import FooterArea from "./footerArea/FooterArea";

const HomePage:React.FC = () => {
    return(
        <React.Fragment>
            <BannerArea/>
            <SearchArea/>
            <CategoryListArea/>
            <ProductListArea/>
        </React.Fragment>
    )
}

export default HomePage;