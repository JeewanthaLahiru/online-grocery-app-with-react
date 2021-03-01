import React from "react";
import {Container, DropdownButton, Navbar, Nav, Dropdown} from "react-bootstrap";

const NavigationBar:React.FC = () => {
    return (
        <Container fluid={true} className="navBar">
            <Navbar bg="white" >

                <DropdownButton title="Categories" variant="outline-secondary">
                    <Dropdown.Item className='dropdown-item' href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <Nav.Link href="#home" className="text-secondary" >Home</Nav.Link>
                <Nav.Link href="#link" className="text-secondary" >FAQ</Nav.Link>
                <Nav.Link href="#link" className="text-secondary" >About Us</Nav.Link>
                <Nav.Link href="#link" className="text-secondary" >Contact Us</Nav.Link>
            </Navbar>
        </Container>
    )
}

export default NavigationBar;