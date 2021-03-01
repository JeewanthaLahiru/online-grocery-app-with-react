import React from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";

const BottomHeader:React.FC = () => {
    return (
        <Container fluid={true} className="m-0 p-0 bottom-header" >
            <div className="shadow-line" ></div>
            <Navbar bg="white" expand="lg" >
                <Navbar.Brand href="#home" className="text-success bottom-header-title" >
                    <span>LOGO</span>
                </Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Link href="#home" className="notification">
                        <span><i className="feather icon-shopping-cart"/></span>
                        <span className="badge">2</span>
                    </Nav.Link>

                </Nav>
                <Nav.Link href="#link">
                    <Button variant="success" size="lg" className="check-out-button" >Check out</Button>
                </Nav.Link>
            </Navbar>
        </Container>
    )
}

export default BottomHeader;