import React from 'react';
import {Col, Form, Row} from "react-bootstrap";

const SearchArea:React.FC = () => {
    return(
        <Row className="mx-0 mt-4 search-area">
            <Col lg={{span:4, offset:3}}
                md={{span:5, offset:2}}
            >
                <Form>
                    <Form.Group className="search-items">
                        <Row className="px-2">
                            <Col xs={2} className="pt-2 pr-0">
                                <i className="feather icon-search search-icon"/>
                            </Col>
                            <Col xs={10} className="pl-0">
                                <Form.Control type="text" className="search-bar px-0" placeholder={"Search..."} />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}

export default SearchArea;