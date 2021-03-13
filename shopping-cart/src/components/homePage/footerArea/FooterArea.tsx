import React from 'react';
import {Col, Row} from "react-bootstrap";
import FooterNavigationBar from "./FooterNavigationBar";
import FooterSocialMediaBar from "./FooterSocialMediaBar";

const FooterArea:React.FC = () => {
    return(
        <Row>
            <Col xs={{span:8, offset:2}} className="p-0 p-0" >
                <FooterNavigationBar/>
                <FooterSocialMediaBar/>
            </Col>
        </Row>
    )
}

export default FooterArea;