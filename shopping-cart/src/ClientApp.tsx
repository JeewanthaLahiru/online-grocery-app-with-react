import React from 'react';
import {Container} from "react-bootstrap";
import HeaderArea from "./components/homePage/headerArea/HeaderArea";
import BannerArea from "./components/homePage/bannerArea/BannerArea";

const ClientApp:React.FC = () => {
    return(
        <Container fluid={true} className="m-0 p-0" >
            <HeaderArea/>
            <BannerArea/>
        </Container>
    )
}

export default ClientApp;