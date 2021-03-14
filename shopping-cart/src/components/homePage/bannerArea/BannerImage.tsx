import React from "react";
import {Container, Image} from "react-bootstrap";
import banner_image from "../../../assets/images/banner_images/banner.jpg";

const BannerImage:React.FC = () => {
    return (
        <Container fluid={true} className="banner-image m-0 p-0" >
            <Image src={banner_image} alt="banner image" />
        </Container>
    )
}

export default BannerImage;