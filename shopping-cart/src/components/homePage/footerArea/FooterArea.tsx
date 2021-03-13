import React from 'react';
import {Col, Row} from "react-bootstrap";
import FooterNavigationBar from "./FooterNavigationBar";
import FooterSocialMediaBar from "./FooterSocialMediaBar";
import FooterCopyrightBar from "./FooterCopyrightBar";

const FooterArea:React.FC = () => {
    return(
        <Row className="m-0 footer-background">
            <Col xs={{span:8, offset:2}} >
                <FooterNavigationBar/>
                <FooterSocialMediaBar/>
                <FooterCopyrightBar/>
            </Col>
        </Row>
    )
}

export default FooterArea;