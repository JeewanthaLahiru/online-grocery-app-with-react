import React from 'react';
import {Carousel, Container} from "react-bootstrap";
import BannerImage from "./BannerImage";
import BannerContent from "./BannerContent";

const BannerArea:React.FC = () => {
    return (
        <Container fluid={true} className="banner-area m-0 p-0" >
            <h1>banner area</h1>

        </Container>
    )
}

export default BannerArea;