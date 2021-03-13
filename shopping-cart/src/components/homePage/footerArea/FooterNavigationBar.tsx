import React from 'react';
import {Nav, Navbar} from "react-bootstrap";

const FooterNavigationBar:React.FC = () => {
    return(
        <Navbar variant="dark" className={'mt-3 py-0 px-lg-8 footer-background footer-label2-color text-center'}>
            <Nav className="m-auto nav-section">
                <Nav.Link className={'mx-md-2'}>ABOUT US</Nav.Link>
                <Nav.Link className={'mx-md-2'}>FAQ</Nav.Link>
                <Nav.Link className={'mx-md-2'}>DELIVERY INFO</Nav.Link>
                <Nav.Link className={'mx-md-2'}>CONTACT US</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default FooterNavigationBar;