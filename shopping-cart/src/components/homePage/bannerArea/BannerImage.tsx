import React from "react";
import {Container} from "react-bootstrap";
import banner_image from "../../../assets/images/banner_images/banner.jpg";

const BannerImage:React.FC = () => {
    return (
        <Container fluid={true} className="banner-image m-0 p-0" >
            <h1>banner</h1>
        </Container>
    )
}

export default BannerImage;