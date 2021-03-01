import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

const BannerContent:React.FC = () => {
    return (
        <Container fluid={true} className="banner-content m-0 p-0">
            <Row  className={"p-0 m-0"}>
                <Col xs={{span:9, offset:3}} sm={{span:6, offset:6}} md={{span:5, offset:7}}>
                    <Container fluid={true} className="logo-container m-0 p-0" >
                        <img src={leaves_logo} alt="leaves logo" />
                    </Container>
                    <h4 className="text-secondary">100% Healthy and Affordable</h4>
                    <h1 className="text-success" >Organic Vegetables</h1>
                    <h4 className="text-secondary">Small Chages Big Difference</h4>
                    <Button variant="light" >Shop Now</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default BannerContent;