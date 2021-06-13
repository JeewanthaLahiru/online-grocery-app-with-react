import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';

const TopHeader:React.FC = () => {
    return (
        <Container fluid={true} className="top-header" >
            <Navbar bg="white" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav mr-0" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link href="#home"> <i className="feather icon-truck"/> Delivery Areas</Nav.Link>
                        <Nav.Link href="#link"> <i className="feather icon-phone-call" /> +94 112 123 456</Nav.Link>
                        <Nav.Link href="#home">
                            <Link to={"/register"}>
                                <Button variant="outline-success">Register</Button>
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <Button variant="light" className="text-success" >Login</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default TopHeader;