import React from 'react';
import {Col, Row} from "react-bootstrap";
import FooterNavigationBar from "./FooterNavigationBar";

const FooterArea:React.FC = () => {
    return(
        <Row>
            <Col xs={{span:8, offset:2}} className="p-0 p-0" >
                <FooterNavigationBar/>
            </Col>
        </Row>
    )
}

export default FooterArea;