import React from 'react';
import {Carousel, Container} from "react-bootstrap";
import BannerImage from "./BannerImage";
import BannerContent from "./BannerContent";

const BannerArea:React.FC = () => {
    return (
        <Container fluid={true} className="banner-area m-0 p-0" >
            <Carousel>
                <Carousel.Item interval={4000}>
                    <BannerImage/>
                    <BannerContent/>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <BannerImage/>
                    <BannerContent/>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <BannerImage/>
                    <BannerContent/>
                </Carousel.Item>
            </Carousel>

        </Container>
    )
}

export default BannerArea;