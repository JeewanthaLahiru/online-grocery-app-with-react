import React from 'react';
import {Col, Row, Spinner} from "react-bootstrap";

const LoadingScreen:React.FC = () => {
    return(
        <Row className="m-0 p-0 loading-spinner-screen">
            <Col xs={12}>
                <Spinner animation="grow" />
            </Col>
        </Row>
    )
}

export default LoadingScreen;