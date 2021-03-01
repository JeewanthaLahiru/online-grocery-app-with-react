import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

const BannerContent:React.FC = () => {
    return (
        <Container fluid={true} className="banner-content m-0 p-0">
            <Row  className={"p-0 m-0"}>
                <h1>banner content</h1>
            </Row>
        </Container>
    )
}

export default BannerContent;